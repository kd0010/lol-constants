import { RuneNames } from '../../Constants/Runes/RuneNames'
import { RuneId } from '../../types'

export function isRuneId(id: string): id is RuneId {
  return id in RuneNames
}
