export const ItemSrTypes = {
  STARTER: 0,
  BASIC: 1,
  EPIC: 2,
  LEGENDARY: 3,
  TRINKET: 11,
  BOOTS: 12,
  CONSUMABLE: 13,
  NONSR: -1,
  UNKNOWN: -2,
} as const

export type ItemSrType = typeof ItemSrTypes[keyof typeof ItemSrTypes]
