import { TreeRuneNames } from '../Constants/TreeRuneNames'
import { TreeRuneName } from '../types'

export function isTreeRuneName(name: any): name is TreeRuneName {
  if (TreeRuneNames.includes(name)) return true
  return false
}
