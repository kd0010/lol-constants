import { RuneIds } from '../../Constants/Runes/RuneSetsByRuneNames'
import { RuneId, RuneName } from '../../types'

export function getRuneIdByName(name: RuneName): RuneId {
  return RuneIds[ name ]
}
