import { SpellKeys } from '../../Constants/Spells/SpellKeys'
import { SpellId, SpellKey } from '../../types'

export function getSpellKeyById(id: SpellId): SpellKey {
  return SpellKeys[ id ]
}
