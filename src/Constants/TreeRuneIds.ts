import runesById from '../assets/generated/runesById.json'
import { TreeRuneId } from '../types'

export const TreeRuneIds: TreeRuneId[] = (
  Object.keys(runesById).map(id => id as keyof typeof runesById)
)
