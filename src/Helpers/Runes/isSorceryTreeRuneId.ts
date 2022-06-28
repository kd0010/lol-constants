import { PrimaryTrees } from '../../Constants/Runes/RuneSets'
import { SorceryTreeRuneId } from '../../types'

export function isSorceryTreeRuneId(id: string): id is SorceryTreeRuneId {
  return id in PrimaryTrees.Sorcery
}
