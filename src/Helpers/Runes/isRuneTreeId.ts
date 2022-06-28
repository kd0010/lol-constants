import { RuneTreeNames } from '../../Constants/Runes/RuneTreeNames'
import { RuneTreeId } from '../../types'

export function isRuneTreeId(id: string): id is RuneTreeId {
  return id in RuneTreeNames
}
