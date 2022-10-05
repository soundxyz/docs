export const ETH_PRICE = 1500
export const GAS_PRICE_IN_GWEI = 50

export const gasFigures = {
  CREATE_EDITION_1: 328264,
  CREATE_EDITION_2: 451043,
  CREATE_EDITION_3: 549558,
  MINT_EDITION_MAX: 43512,
  MINT_RANGE_EDITION: 45337,
  MINT_FIXED_PRICE_SIGNATURE: 69725,
  MINT_MERKLE_DROP: 49983,
}

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

export function getDollarEstimate(gwei) {
  return formatter.format((gwei * GAS_PRICE_IN_GWEI * ETH_PRICE) / 1000000000)
}
