export const ItemSrTypes = {
  STARTER: 0,
  BASIC: 1,
  EPIC: 2,
  LEGENDARY: 3,
  TRINKET: 11,
  BOOTS: 12,
  CONSUMABLE: 13,
  MISC: -1,
} as const

export type ItemSrType = typeof ItemSrTypes[keyof typeof ItemSrTypes]
