import { SpellKeys } from '../../Constants/Spells/SpellKeys'
import { SpellNames } from '../../Constants/Spells/SpellNames'
import { SpellId, SpellName } from '../../types'

export function getSpellNameById(id: SpellId): SpellName {
  return SpellNames[ SpellKeys[ id ] ]
}
