import { RuneIds } from '../Constants/RuneIds'
import { RuneId } from '../types'

export function isRuneId(id: any): id is RuneId {
  if (RuneIds.includes(id)) return true
  return false
}
