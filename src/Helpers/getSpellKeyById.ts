import { SpellKeys } from '../Constants/SpellKeys'
import { SpellId, SpellKey } from '../types'

export function getSpellKeyById(id: SpellId): SpellKey {
  return SpellKeys[ id ]
}
