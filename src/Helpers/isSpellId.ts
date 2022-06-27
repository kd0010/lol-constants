import { SpellKeys } from '../Constants/SpellKeys'
import { SpellId } from '../types'

export function isSpellId(id: string): id is SpellId {
  return id in SpellKeys
}
