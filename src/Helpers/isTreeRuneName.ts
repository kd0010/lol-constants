import { TreeRuneIds } from '../Constants/TreeRuneIds'
import { TreeRuneName } from '../types'

export function isTreeRuneName(name: string): name is TreeRuneName {
  return name in TreeRuneIds
}
