import { RuneTreeNames } from '../../Constants/Runes/RuneTreeNames'
import { RuneTreeId, RuneTreeName } from '../../types'

export function getRuneTreeNameById(id: RuneTreeId): RuneTreeName {
  return RuneTreeNames[id]
}
