import { TreeRuneIds } from '../Constants/TreeRuneIds'
import { TreeRuneId, TreeRuneName } from '../types'

export function getTreeRuneIdByName(name: TreeRuneName): TreeRuneId {
  return TreeRuneIds[ name ]
}
