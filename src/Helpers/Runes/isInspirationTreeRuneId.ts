import { PrimaryRuneTrees } from '../../Constants/Runes/RuneSets'
import { InspirationTreeRuneId } from '../../types'

export function isInspirationTreeRuneId(id: string): id is InspirationTreeRuneId {
  return id in PrimaryRuneTrees.Inspiration
}
