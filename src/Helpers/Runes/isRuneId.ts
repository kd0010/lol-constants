import { RuneNames } from '../../Constants/Runes/RuneSets'
import { RuneId } from '../../types'

export function isRuneId(id: string): id is RuneId {
  return id in RuneNames
}
