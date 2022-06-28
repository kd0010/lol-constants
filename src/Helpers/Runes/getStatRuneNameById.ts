import { StatRuneNames } from '../../Constants/Runes/StatRuneNames'
import { StatRuneId, StatRuneName } from '../../types'

export function getStatRuneNameById(id: StatRuneId): StatRuneName {
  return StatRuneNames[ id ]
}
