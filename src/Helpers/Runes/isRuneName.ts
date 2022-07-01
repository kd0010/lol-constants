import { RuneIds } from '../../Constants/Runes/RuneSetsByRuneNames'
import { RuneName } from '../../types'

export function isRuneName(name: string): name is RuneName {
  return name in RuneIds
}
