import { SpellKeys } from '../../Constants/Spells/SpellKeys'
import { SpellId } from '../../types'

export function isSpellId(id: string): id is SpellId {
  return id in SpellKeys
}
