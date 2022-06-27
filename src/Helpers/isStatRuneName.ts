import { StatRuneIds } from '../Constants/StatRuneIds'
import { StatRuneName } from '../types'

export function isStatRuneName(name: string): name is StatRuneName {
  return name in StatRuneIds
}
