import { TreeRuneNames } from '../../Constants/Runes/TreeRuneNames'
import { TreeRuneId, TreeRuneName } from '../../types'

export function getTreeRuneNameById(id: TreeRuneId): TreeRuneName {
  return TreeRuneNames[ id ]
}
