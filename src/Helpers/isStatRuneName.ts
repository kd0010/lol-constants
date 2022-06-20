import { StatRuneNames } from '../Constants/StatRuneNames'
import { StatRuneName } from '../types'

export function isStatRuneName(name: any): name is StatRuneName {
  if (StatRuneNames.includes(name)) return true
  return false
}
