import { TreeRuneNames } from '../../Constants/Runes/TreeRuneNames'
import { TreeRuneId } from '../../types'

export function isTreeRuneId(id: string): id is TreeRuneId {
  return id in TreeRuneNames
}
