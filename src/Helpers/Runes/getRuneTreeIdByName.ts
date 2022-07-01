import { RuneTreeIds } from '../../Constants/Runes/RuneTreeIds'
import { RuneTreeId, RuneTreeName } from '../../types'

export function getRuneTreeIdByName(name: RuneTreeName): RuneTreeId {
  return RuneTreeIds[name]
}
