import { StatRuneIds } from '../../Constants/Runes/RuneSetsByRuneNames'
import { StatRuneName } from '../../types'

export function isStatRuneName(name: any): name is StatRuneName {
  return name in StatRuneIds
}
