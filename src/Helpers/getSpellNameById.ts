import { SpellKeys } from '../Constants/SpellKeys'
import { SpellNames } from '../Constants/SpellNames'
import { SpellId, SpellName } from '../types'

export function getSpellNameById(id: SpellId): SpellName {
  return SpellNames[ SpellKeys[ id ] ]
}
