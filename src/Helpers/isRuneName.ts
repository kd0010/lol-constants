import { RuneIds } from '../Constants/RuneIds'
import { RuneName } from '../types'

export function isRuneName(name: string): name is RuneName {
  return name in RuneIds
}
