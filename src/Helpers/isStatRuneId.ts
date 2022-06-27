import { StatRuneNames } from '../Constants/StatRuneNames'
import { StatRuneId } from '../types'

export function isStatRuneId(id: string): id is StatRuneId {
  return id in StatRuneNames
}
