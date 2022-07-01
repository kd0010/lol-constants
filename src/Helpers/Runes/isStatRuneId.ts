import { StatRuneNames } from '../../Constants/Runes/RuneSets'
import { StatRuneId } from '../../types'

export function isStatRuneId(id: string): id is StatRuneId {
  return id in StatRuneNames
}
