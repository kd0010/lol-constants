import { StatRuneIds } from '../../Constants/Runes/StatRuneIds'
import { StatRuneId, StatRuneName } from '../../types'

export function getStatRuneIdByName(name: StatRuneName): StatRuneId {
  return StatRuneIds[ name ]
}
