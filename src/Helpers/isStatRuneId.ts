import { StatRuneIds } from '../Constants/StatRuneIds'
import { StatRuneId } from '../types'

export function isStatRuneId(id: any): id is StatRuneId {
  if (StatRuneIds.includes(id)) return true
  return false
}
