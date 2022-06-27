import { RuneNames } from '../Constants/RuneNames'
import { RuneId, RuneName } from '../types'

export function getRuneNameById(id: RuneId): RuneName {
  return RuneNames[ id ]
}
