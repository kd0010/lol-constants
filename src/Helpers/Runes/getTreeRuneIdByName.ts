import { TreeRuneIds } from '../../Constants/Runes/TreeRuneIds'
import { TreeRuneId, TreeRuneName } from '../../types'

export function getTreeRuneIdByName(name: TreeRuneName): TreeRuneId {
  return TreeRuneIds[ name ]
}
