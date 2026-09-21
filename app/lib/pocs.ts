export const PROFILE_FINDINGS =
  "https://github.com/Godwin-web3/Godwin-web3/blob/main/FINDINGS.md";

export function profileFindingUrl(slug: string): string {
  return `${PROFILE_FINDINGS}#${slug}`;
}
