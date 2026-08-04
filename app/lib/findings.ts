export type Severity = "Critical" | "High" | "Medium" | "Low" | "Informational";

export interface Finding {
  slug: string;
  protocol: string;
  title: string;
  severity: Severity;
  status: string;
  chain: string;
  summary: string;
  rootCause: string;
  verification: string;
  address?: string;
  tags: string[];
  verifiedLive: boolean;
  pocUrl?: string;
}

const CS_BRANCH =
  "https://github.com/godwin-web3/chainsentinel/blob/claude/chainsentinel-web3-barriers-7y4xzh";

export const findings: Finding[] = [
  {
    slug: "ellipsis-incentivevoting-reentrancy",
    protocol: "Ellipsis Finance",
    title: "IncentiveVoting.createTokenApprovalVote() reentrancy",
    severity: "Medium",
    status: "Verified with working PoC",
    chain: "BSC",
    summary:
      "The external call target inside createTokenApprovalVote() (_token.minter() -> pool.withdraw_admin_fees()) is a raw, caller-supplied parameter rather than a fixed address - fully attacker-controlled, unlike a sibling finding on the same run that turned out to be a false positive precisely because its call target was immutable and hookless.",
    rootCause:
      "State (lastVote, tokenApprovalVotes) is written after the external call, and the call destination is chosen by the caller, not the protocol - a genuine CEI violation with an exploitable target, not just a structural pattern match.",
    verification:
      "Built a real Foundry PoC: deployed a malicious _token/pool pair, called createTokenApprovalVote, and confirmed the callback successfully reentered and pushed its own vote entry mid-call - run against live forked BSC state (tokenApprovalVotes.length continued from the real on-chain value, not a fresh deploy).",
    address: "0x4695e50A38E33Ea09D1F623ba8A8dB24219bb06a",
    tags: ["reentrancy", "CEI violation", "governance"],
    verifiedLive: true,
    pocUrl: `${CS_BRANCH}/test/Verify_IncentiveVoting_CreateTokenApprovalVote_Reentrancy.t.sol`,
  },
  {
    slug: "lemon-fun-bonding-curve-theft",
    protocol: "lemon.fun",
    title: "LemonCurveFactory legacy bonding curve — total buyer-fund theft",
    severity: "Critical",
    status: "Verified with working PoC",
    chain: "Robinhood Chain",
    summary:
      "LemonCurveFactory.launch() accepts caller-supplied dexFactory/positionManager addresses with no validation against canonical DEX addresses. At graduation, the bonding curve approves the attacker-chosen positionManager for all real buyer ETH and calls mint() on it.",
    rootCause:
      "Missing validation of deployment-time trust parameters lets a malicious deployer walk away with 100% of raised funds while buyers hold worthless tokens - no real liquidity pool is ever created.",
    verification:
      "PoC ran against the real, live, verified LemonCurveFactory on Robinhood Chain mainnet via a forge fork test and confirmed the theft end to end.",
    address: "0xb5B70EF8698e022d38E2AC211ddfd0a5436bD1Ad",
    tags: ["access control", "trust parameter", "fund theft"],
    verifiedLive: true,
    pocUrl: `${CS_BRANCH}/test/Exploit_LemonCurveFactory_FakeDexRug.t.sol`,
  },
  {
    slug: "flex-lender-auction-self-deal",
    protocol: "Flex Finance",
    title: "Lender withdrawal shortfall enables free-collateral self-deal",
    severity: "High",
    status: "Verified with working PoC",
    chain: "Ethereum",
    summary:
      "When a Lender (Yearn V3 vault) withdrawal exceeds idle liquidity, TroveManager.redeem() kicks a Dutch auction with receiver set to the withdrawing depositor themselves. TokenizedStrategy permanently marks the shortfall as a realized loss for all remaining depositors.",
    rootCause:
      "Auction.take()'s transferFrom is self-referential when the depositor takes their own kicked auction (msg.sender == auction.receiver), netting to zero cost while they still receive real collateral - with zero surplus reaching the vault to offset the loss charged to remaining depositors.",
    verification:
      "PoC redeemed a real existing large Lender depositor's shares (no synthetic deposit), triggered the shortfall/auction-kick path against real on-chain state, then took the resulting auction as that depositor: net USDC cost was 0, ~39,131 tokens extracted for free.",
    tags: ["accounting", "auction mechanics", "self-deal"],
    verifiedLive: true,
    pocUrl: `${CS_BRANCH}/test/Exploit_Flex_AuctionSelfDeal.t.sol`,
  },
  {
    slug: "flex-borrower-auction-self-deal",
    protocol: "Flex Finance",
    title: "Direct-borrower path shares the same auction self-deal bug",
    severity: "High",
    status: "Verified — second entry point, same root cause",
    chain: "Ethereum",
    summary:
      "The same auction self-deal root cause is separately reachable from TroveManager.open_trove()/borrow(): _transfer_borrow_tokens() calls the internal _redeem() with its default receiver = msg.sender whenever requested debt exceeds idle liquidity.",
    rootCause:
      "Self-taking the auction lets the borrower extract real collateral for free on top of cash they were already legitimately owed - collateral value pulled from unrelated troves with no offsetting value entering anywhere.",
    verification:
      "Confirmed the root cause found on the Lender-withdrawal path is independently reachable through this second entry point, against real deployed contracts.",
    tags: ["accounting", "auction mechanics", "self-deal"],
    verifiedLive: true,
    pocUrl: `${CS_BRANCH}/test/Exploit_Flex_BorrowerAuctionSelfDeal.t.sol`,
  },
  {
    slug: "hydrex-minter-initializer-noop",
    protocol: "Hydrex",
    title: "MinterUpgradeableV4._initialize() one-time guard is a no-op",
    severity: "High",
    status: "Verified with working PoC",
    chain: "Ethereum",
    summary:
      "_initialize() is meant to run exactly once, guarded by require(_initializer != address(0)). _initializer starts as the deployer's address and is set to address(1) after the first call - both states are nonzero, so the guard never actually blocks re-invocation.",
    rootCause:
      "A one-time-latch guard that checks 'nonzero' instead of a specific sentinel value never actually latches - it resets identically on every call, so re-invocation is repeatable without limit.",
    verification:
      "Live precondition verified directly against unmodified mainnet state: storage slot 206 on the real Minter proxy already held address(1), proving _initialize() ran once as intended and remains re-callable by governor. PoC (real governor impersonated) confirmed a second call grants a brand-new permanent veHYDX lock with ~7.69M units of governance voting power for zero real collateral.",
    tags: ["initializer", "governance", "access control"],
    verifiedLive: true,
    pocUrl: `${CS_BRANCH}/test/Exploit_Hydrex_MinterV4_BrokenOneTimeGuard.t.sol`,
  },
  {
    slug: "noon-redeemhandler-unratiod-drain",
    protocol: "Noon (USN)",
    title: "RedeemHandler.redeem() has no USN/collateral ratio check",
    severity: "Critical",
    status: "Verified with working PoC",
    chain: "Ethereum",
    summary:
      "RedeemHandler.redeem() burns order.usnAmount and pays out order.collateralAmount with no on-chain relationship enforced between the two, for any caller holding BURNER_ROLE.",
    rootCause:
      "The live BURNER_ROLE + DEFAULT_ADMIN_ROLE holder on the real, currently-deployed RedeemHandler is a plain EOA that can trivially self-sign a redemption order with an arbitrary collateral amount.",
    verification:
      "PoC confirmed draining the contract's full collateral balance (both its current real balance and a simulated operational float) by burning 1 wei of USN.",
    address: "0xcC2447B495cBc8c2263619Ff3dc4c13604c9b11f",
    tags: ["access control", "accounting", "fund drain"],
    verifiedLive: true,
    pocUrl: `${CS_BRANCH}/test/Exploit_Noon_RedeemHandler_UnratiodDrain.t.sol`,
  },
  {
    slug: "noon-minterhandler-uncollateralized-mint",
    protocol: "Noon (USN)",
    title: "MinterHandlerV2 uncollateralized self-mint",
    severity: "Critical",
    status: "Verified with working PoC",
    chain: "Ethereum",
    summary:
      "mint()'s zero-amount guard and 2%-band collateral/usnAmount ratio check are both gated behind order.user != msg.sender, so any address holding MINTER_ROLE that is also a whitelisted user can self-mint an arbitrary usnAmount with collateralAmount = 0.",
    rootCause:
      "Falsifies the invariant 'USN minted via MinterHandlerV2.mint() is always backed by proportional collateral' - both safety checks are skipped entirely for the self-mint case.",
    verification:
      "Confirmed live, not hypothetical: the address holding MINTER_ROLE, DEFAULT_ADMIN_ROLE, and whitelistedUsers simultaneously on the real, currently-active MinterHandlerV2 was identified on-chain. Passing mainnet-fork Foundry test using a fresh test-controlled EOA granted the identical real role.",
    address: "0xB91b361ebE4022Bb62dF0651bDD09b21209ac058",
    tags: ["access control", "accounting", "uncollateralized mint"],
    verifiedLive: true,
    pocUrl: `${CS_BRANCH}/test/Exploit_Noon_UncollateralizedSelfMint.t.sol`,
  },
  {
    slug: "hyperfx-calldispatcher-drain",
    protocol: "HyperFX",
    title: "CallDispatcher — unauthenticated dispatch() drains stranded tokens",
    severity: "Medium",
    status: "Verified with working PoC",
    chain: "Ethereum",
    summary:
      "An honest, fully valid IntentGatewayV2.placeOrder() order that unwraps a real LP position via predispatch strands the undeclared leg on CallDispatcher, which an unrelated third party can then drain via a direct, unauthenticated dispatch() call.",
    rootCause:
      "placeOrder's sweep loop iterates order.inputs, not whatever the predispatch calldata actually produced, and dispatch() has no caller restriction at all.",
    verification:
      "Falsifies the invariant 'no undeclared ERC20 ever remains on CallDispatcher after a valid placeOrder() call' with a passing mainnet-fork Foundry test - real, currently-deployed CallDispatcher address confirmed by reading the actual on-chain storage, correcting an earlier address mismap from the minified frontend bundle mid-investigation.",
    address: "0xE2C7e576E26E0bE7aC97c6fE925bcDAbD87c4bEd",
    tags: ["access control", "intent architecture", "fund drain"],
    verifiedLive: true,
    pocUrl: `${CS_BRANCH}/test/Exploit_HyperFX_Dispatcher_Dust.t.sol`,
  },
  {
    slug: "monolith-phantom-collateral",
    protocol: "Monolith Market",
    title: "Phantom collateral via fee-on-transfer / deflationary collateral tokens",
    severity: "Medium",
    status: "Confirmed and verified — not currently exploitable on live markets",
    chain: "Ethereum",
    summary:
      "Lender.adjust() credits a user's internal collateral ledger with the requested transfer amount, not the amount actually received. Any fee-on-transfer or deflationary collateral token lets a user borrow against an inflated ledger balance.",
    rootCause:
      "collateralBalances[account] is credited before safeTransferFrom() executes and is never reconciled against the contract's actual token balance anywhere in adjust(), liquidate(), writeOff(), or redeem(). Because the Factory is fully permissionless, an attacker can deploy their own market with a purpose-built fee-on-transfer token as collateral.",
    verification:
      "Working Foundry PoC against a forked mainnet state via the real, deployed, permissionless Factory.deploy(): attacker deposited 1000 tokens, contract received 900, ledger was credited the full 1000, attacker minted 700 of the market's coin. Honestly scoped: the two currently-live markets (sINV, XAUt) are not exploitable today since neither collateral token is fee-on-transfer - this is a systemic code-level gap, not an active drain.",
    address: "0x6D961c9DCF1AD73566822BA4B087892e3839B849",
    tags: ["accounting", "fee-on-transfer", "permissionless factory"],
    verifiedLive: true,
  },
  {
    slug: "ripe-sequencer-uptime",
    protocol: "Ripe Protocol",
    title: "Missing L2 sequencer uptime validation in ChainlinkPrices",
    severity: "High",
    status: "Verified against real source, 3 findings total",
    chain: "Base",
    summary:
      "ChainlinkPrices has no check for Base sequencer liveness anywhere in its price validation path - a known, precedented vulnerability class (multiple Arbitrum protocols were exploited by exactly this gap in 2023).",
    rootCause:
      "The six checks gating price validity in _getChainlinkData never reference sequencer state. During a sequencer outage, stale pre-outage prices remain fully valid for up to 24 hours, producing incorrect liquidation eligibility on live collateral like WETH.",
    verification:
      "Independently traced through the actual ripe-protocol source, not an AI-generated summary - confirmed no sequencer feed exists anywhere in the codebase under any naming convention. Two secondary findings included in the same report, one with an explicit self-correction after re-verification (dust-balance exclusion is temporary, not permanent) and one honestly scoped down to defense-in-depth once the real governance timelock was accounted for.",
    tags: ["oracle", "L2 sequencer", "liquidation"],
    verifiedLive: false,
  },
  {
    slug: "ramses-dlmm-composition-fee",
    protocol: "Ramses DLMM",
    title: "LP share over-minting via missing fee term in _updateBin() composition fee accounting",
    severity: "Informational",
    status: "Confirmed real deviation from upstream — no profitable exploit path found",
    chain: "Robinhood Chain",
    summary:
      "DLMMPool's active-bin share-minting formula omits a fee term the upstream Trader Joe V2 codebase it forked from includes, understating the liquidity denominator and over-minting LP shares on imbalanced active-bin deposits that trigger a composition fee.",
    rootCause:
      "binLiquidity should include the LP-retained portion of the composition fee (fees.sub(protocolCFees)) since that value stays in the bin's reserves - the deployed code omits it entirely, confirmed via a line-by-line diff against the audited upstream source.",
    verification:
      "Quantified via an exact numeric replica of the Solidity arithmetic across dozens of scenarios (deposit size, protocol fee share, fee tier, repeated attack cycles, passive bystander LPs) - the composition fee paid always exceeded the value of the extra shares minted. Independently re-verified with an Echidna fuzzing campaign against the real compiled bytecode: 100,213 transactions, 28 distinct call sequences, 0 profitable sequences found. Assessed honestly as Low/Informational, not oversold - a real, systemic accounting bug worth fixing, with no demonstrated fund-loss path despite extensive testing.",
    address: "0x4e857a78bCE4FCF41677f21bFAf3e77890D5042b",
    tags: ["accounting", "AMM", "LP dilution", "fuzzing"],
    verifiedLive: false,
  },
];

export const stats = {
  totalFindings: findings.length,
  protocols: new Set(findings.map((f) => f.protocol)).size,
  criticalOrHigh: findings.filter((f) => f.severity === "Critical" || f.severity === "High").length,
};
