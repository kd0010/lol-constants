import { RuneNames } from '../Constants/RuneNames'
import { RuneName } from '../types'

export function isRuneName(name: any): name is RuneName {
  if (RuneNames.includes(name)) return true
  return false
}
