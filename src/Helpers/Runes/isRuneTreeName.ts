import { RuneTreeNames } from '../../Constants/Runes/RuneTreeNames'
import { RuneTreeName } from '../../types'

export function isRuneTreeName(name: any): name is RuneTreeName {
  return name in RuneTreeNames
}
