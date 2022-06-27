import { StatRuneIds } from '../Constants/StatRuneIds'
import { StatRuneId, StatRuneName } from '../types'

export function getStatRuneIdByName(name: StatRuneName): StatRuneId {
  return StatRuneIds[ name ]
}
