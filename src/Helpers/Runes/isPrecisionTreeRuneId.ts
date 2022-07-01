import { PrimaryRuneTrees } from '../../Constants/Runes/RuneSets'
import { PrecisionTreeRuneId } from '../../types'

export function isPrecisionTreeRuneId(id: string): id is PrecisionTreeRuneId {
  return id in PrimaryRuneTrees.Precision
}
