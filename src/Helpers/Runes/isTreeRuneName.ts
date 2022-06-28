import { TreeRuneIds } from '../../Constants/Runes/TreeRuneIds'
import { TreeRuneName } from '../../types'

export function isTreeRuneName(name: string): name is TreeRuneName {
  return name in TreeRuneIds
}
