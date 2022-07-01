import { RuneNames } from '../../Constants/Runes/RuneSets'
import { RuneId, RuneName } from '../../types'

export function getRuneNameById(id: RuneId): RuneName {
  return RuneNames[ id ]
}
