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
  {
    slug: "orvex-voterv5-stale-reward-index",
    protocol: "Orvex",
    title: "VoterV5 stale reward-index lets a late voter capture other gauges' skipped-epoch rewards",
    severity: "High",
    status: "Verified with working PoC",
    chain: "Robinhood Chain",
    summary:
      "VoterV5._vote()/_reset() never refresh a gauge's reward-index checkpoint - unlike real Velodrome, which updates it on every vote action. The checkpoint only advances via distribute()/killGauge(), which is permissionless and unenforced per-epoch, so a gauge that goes unvoted for N epochs then receives even minimal weight captures the full N-epoch accumulated index delta.",
    rootCause:
      "supplyIndex[gauge] stays frozen at its last distribute() call while the global index keeps advancing every epoch regardless of that gauge's participation - multiplying the full stale delta by only the most recent epoch's vote weight on the next distribute().",
    verification:
      "Fork PoC against live VoterV5 state: a gauge with zero vote weight for 9 real epochs, then 0.1% of total weight in the 10th, captured 10x its fair one-epoch entitlement when distribute() was finally called - quantified end to end, not just a broken-invariant claim.",
    address: "0xEacfE55197F35B03B40DCD5af5919eEF7cf1c3Bd",
    tags: ["accounting", "reward index", "governance", "value extraction"],
    verifiedLive: true,
    pocUrl: `${CS_BRANCH}/test/Exploit_Orvex_VoterV5_StaleRewardIndex.t.sol`,
  },
  {
    slug: "orvex-protocoltoken-missing-burn-early-exit",
    protocol: "Orvex",
    title: "ProtocolToken.sol has no burn() - veORVX early-exit claims permanently revert",
    severity: "High",
    status: "Verified with working PoC",
    chain: "Robinhood Chain",
    summary:
      "VotingEscrowV2_LockLogic._claim() calls token.burn(penaltyAmount) whenever an early exit's penalty is nonzero, but the real deployed ORVX token (ERC20 + ERC20Permit + Ownable2Step only) has no burn() function at all. Any user - no privileged role needed - who locks ORVX in a NON_PERMANENT lock and later tries to exit early, accepting the documented penalty, has the transaction unconditionally revert.",
    rootCause:
      "A core, advertised exit path calls a token function that was never implemented on the real deployed token. There is no other way to exit a NON_PERMANENT lock before natural expiry, so funds are provably stuck past the user's chosen duration regardless of what penalty they'd accept.",
    verification:
      "Fork PoC: funded a fresh user, created a real NON_PERMANENT lock, warped 15 days in with real remaining voting power confirmed on-chain, then showed claim() reverts inside the missing token.burn() call every time.",
    address: "0x18657fF9943FAA5D16C6ea1BC13dd8767984C30E",
    tags: ["token standard gap", "fund lock", "user-facing DoS"],
    verifiedLive: true,
    pocUrl: `${CS_BRANCH}/test/Exploit_Orvex_VotingEscrow_BrokenEarlyExit.t.sol`,
  },
  {
    slug: "orvex-optiontoken-exercisev-broken",
    protocol: "Orvex",
    title: "oORVX.exerciseVe() unconditionally reverts - same missing-burnFrom root cause, independent entry point",
    severity: "Medium",
    status: "Verified — second entry point, same root cause",
    chain: "Robinhood Chain",
    summary:
      "oORVX's exerciseVe() converts option tokens into a permanent veORVX lock via createLockFor(), which unconditionally calls token.burnFrom() for any PERMANENT lock inside VotingEscrowV2_LockLogic._updateLock(). ORVX has no burnFrom() either, so this documented conversion path is completely non-functional for every holder.",
    rootCause:
      "Same protocol-wide token-standard gap as the early-exit claim bug, reached through a third independent code path (alongside the blocked max>0 branch of the Minter genesis-mint bug) - every PERMANENT lock creation anywhere in the protocol hits this.",
    verification:
      "Fork PoC: wrapped real ORVX into oORVX the normal way (1:1, permissionless), then confirmed exerciseVe() reverts inside createLockFor -> _updateLock -> token.burnFrom() for a real funded holder.",
    address: "0xD47F4D84a68C27906E599f5a0E90F95ff815A8C9",
    tags: ["token standard gap", "broken core feature"],
    verifiedLive: true,
    pocUrl: `${CS_BRANCH}/test/Exploit_Orvex_OptionToken_ExerciseVe_Broken.t.sol`,
  },
  {
    slug: "orvex-bveorvx-exercisev-abi-mismatch",
    protocol: "Orvex",
    title: "bveORVX.exerciseVe() calls a function selector that doesn't exist on the real oORVX contract",
    severity: "Medium",
    status: "Verified with working PoC",
    chain: "Robinhood Chain",
    summary:
      "bveORVX's optionToken is statically typed as the 5-argument OptionTokenV3.exerciseVe(uint256,uint256,address,uint256,uint256) (selector 0xa9f6ee33), but the contract actually deployed at that address only implements the simpler 2-argument exerciseVe(uint256,address) (selector 0x9130325d) - two entirely different functions as far as the EVM is concerned.",
    rootCause:
      "An interface/version mismatch between two of Orvex's own contracts, distinct from the missing-burn bugs found elsewhere - calling a selector the target contract never defined falls through to nothing and reverts every time.",
    verification:
      "Fork PoC: directly probed the 5-arg selector against the real deployed optionToken address (confirmed it doesn't exist), then called bveORVX.exerciseVe() the way any real user would (amount=0, isolating the call from needing a real balance) and confirmed it reverts identically.",
    address: "0xD2190FC5Df4aBDc9Dc4b6804dabe3435B14eb8B3",
    tags: ["interface mismatch", "broken core feature"],
    verifiedLive: true,
    pocUrl: `${CS_BRANCH}/test/Exploit_Orvex_BveORVX_ExerciseVe_ABIMismatch.t.sol`,
  },
  {
    slug: "orvex-minter-broken-initialize-latch",
    protocol: "Orvex",
    title: "MinterUpgradeableV3._initialize() one-time latch never actually latches",
    severity: "Medium",
    status: "Verified with working PoC",
    chain: "Robinhood Chain",
    summary:
      "The guard require(_initializer != address(0), 'already initialized') is satisfied by any nonzero value, including the sentinel it sets on completion - so it never blocks a second call. The governor can re-run the genesis-distribution function at will, silently rewinding whatever decay curve the emission schedule applies.",
    rootCause:
      "A one-time-latch that checks 'nonzero' instead of a specific sentinel value doesn't actually latch - it resets identically every call. Proven independent of the separate missing-burnFrom token bug: the max=0 path resets active_period/getCurrentWeek back to 0 with zero dependency on that other gap.",
    verification:
      "Fork PoC: called the real genesis function as governor, simulated 10 real epochs passing via permissionless update_period() calls (getCurrentWeek reached 10), then called it again and confirmed the week counter was silently rewound to 0 - a second run that should have reverted at the guard instead executed in full.",
    address: "0xb0B3B13B9122711eA9853C633CC93A925A53754f",
    tags: ["initializer", "governance", "emission schedule"],
    verifiedLive: true,
    pocUrl: `${CS_BRANCH}/test/Exploit_Orvex_MinterV3_BrokenLatch.t.sol`,
  },
];

export const stats = {
  totalFindings: findings.length,
  protocols: new Set(findings.map((f) => f.protocol)).size,
  criticalOrHigh: findings.filter((f) => f.severity === "Critical" || f.severity === "High").length,
};

export interface ProtocolGroup {
  protocol: string;
  /** Distinct chains this protocol's findings span - usually just one. */
  chains: string[];
  findings: Finding[];
}

/** Findings grouped by protocol, in first-appearance order. */
export const groupedByProtocol: ProtocolGroup[] = (() => {
  const order: string[] = [];
  const byProtocol = new Map<string, Finding[]>();

  for (const f of findings) {
    if (!byProtocol.has(f.protocol)) {
      order.push(f.protocol);
      byProtocol.set(f.protocol, []);
    }
    byProtocol.get(f.protocol)!.push(f);
  }

  return order.map((protocol) => {
    const group = byProtocol.get(protocol)!;
    return {
      protocol,
      chains: Array.from(new Set(group.map((f) => f.chain))),
      findings: group,
    };
  });
})();
