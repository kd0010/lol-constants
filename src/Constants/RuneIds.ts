import runesById from '../generated/runesById.json'
import { RuneId } from '../types'
import { StatRunes } from './StatRunes'

export const RuneIds: RuneId[] = [
  ...Object.keys(runesById).map(id => id as keyof typeof runesById),
  ...Object.keys(StatRunes).map(id => id as keyof typeof StatRunes),
]
