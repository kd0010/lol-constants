import { SpellNames } from '../../Constants/Spells/SpellNames'
import { SpellKey } from '../../types'

export function isSpellKey(key: string): key is SpellKey {
  return key in SpellNames
}
