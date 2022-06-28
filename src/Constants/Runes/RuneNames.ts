import { StatRuneNames } from './StatRuneNames'
import { TreeRuneNames } from './TreeRuneNames'

export const RuneNames = {
  ...TreeRuneNames,
  ...StatRuneNames,
} as const
