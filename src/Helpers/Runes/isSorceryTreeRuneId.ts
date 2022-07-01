import { PrimaryRuneTrees } from '../../Constants/Runes/RuneSets'
import { SorceryTreeRuneId } from '../../types'

export function isSorceryTreeRuneId(id: string): id is SorceryTreeRuneId {
  return id in PrimaryRuneTrees.Sorcery
}
