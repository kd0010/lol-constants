import { TreeRuneIds } from '../Constants/TreeRuneIds'
import { TreeRuneId } from '../types'

export function isTreeRuneId(id: any): id is TreeRuneId {
  if (TreeRuneIds.includes(id)) return true
  return false
}
