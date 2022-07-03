import { SpellKeys } from '../../Constants/Spells/SpellKeys'
import { SpellId } from '../../types'

export function isSpellId(id: any): id is SpellId {
  return id in SpellKeys
}
