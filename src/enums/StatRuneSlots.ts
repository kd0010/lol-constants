export const StatRuneSlots = {
  OFFENSE: 0,
  FLEX: 1,
  DEFENSE: 2,
} as const

export type StatRuneSlot = typeof StatRuneSlots[keyof typeof StatRuneSlots]
