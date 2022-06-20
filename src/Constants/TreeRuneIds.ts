import runesById from '../generated/runesById.json'
import { TreeRuneId } from '../types'

export const TreeRuneIds: TreeRuneId[] = (
  Object.keys(runesById).map(id => id as keyof typeof runesById)
)
