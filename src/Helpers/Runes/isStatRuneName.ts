import { StatRuneIds } from '../../Constants/Runes/StatRuneIds'
import { StatRuneName } from '../../types'

export function isStatRuneName(name: string): name is StatRuneName {
  return name in StatRuneIds
}
