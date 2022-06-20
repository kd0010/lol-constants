import runesById from '../generated/runesById.json'
import { StatRunes } from '../Constants/StatRunes'
import { RuneId, RuneName, TreeRuneName } from '../types'
import { isStatRuneId } from './isStatRuneId'

export function getRuneNameById(id: RuneId): RuneName {
  if (isStatRuneId(id)) return StatRunes[ id ]
  return runesById[ id ].name as TreeRuneName
}
