import { StatRuneIds } from './StatRuneIds'
import { TreeRuneIds } from './TreeRuneIds'

export const RuneIds = {
  ...TreeRuneIds,
  ...StatRuneIds,
} as const
