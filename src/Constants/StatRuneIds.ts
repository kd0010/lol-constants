import { StatRuneId } from '../types'
import { StatRunes } from './StatRunes'

export const StatRuneIds: StatRuneId[] = (
  Object.keys(StatRunes).map(id => id as keyof typeof StatRunes)
)
