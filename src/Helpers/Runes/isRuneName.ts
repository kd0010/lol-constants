import { RuneIds } from '../../Constants/Runes/RuneSetsByRuneNames'
import { RuneName } from '../../types'

export function isRuneName(name: any): name is RuneName {
  return name in RuneIds
}
