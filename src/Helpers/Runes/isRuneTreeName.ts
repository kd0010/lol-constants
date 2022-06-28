import { RuneTreeIds } from '../../Constants/Runes/RuneTreeIds'
import { RuneTreeName } from '../../types'

export function isRuneTreeName(name: any): name is RuneTreeName {
  return name in RuneTreeIds
}
