import { PrimaryRuneTrees } from '../../Constants/Runes/RuneSets'
import { DominationTreeRuneId } from '../../types'

export function isDominationTreeRuneId(id: string): id is DominationTreeRuneId {
  return id in PrimaryRuneTrees.Domination
}
