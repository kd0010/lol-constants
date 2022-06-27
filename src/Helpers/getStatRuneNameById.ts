import { StatRuneNames } from '../Constants/StatRuneNames'
import { StatRuneId, StatRuneName } from '../types'

export function getStatRuneNameById(id: StatRuneId): StatRuneName {
  return StatRuneNames[ id ]
}
