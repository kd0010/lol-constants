import { RuneId, RuneName } from '../../types'
import { RuneIds } from '../../Constants/Runes/RuneIds'

export function getRuneIdByName(name: RuneName): RuneId {
  return RuneIds[ name ]
}
