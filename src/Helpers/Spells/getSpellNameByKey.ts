import { SpellNames } from '../../Constants/Spells/SpellNames'
import { SpellKey, SpellName } from '../../types'

export function getSpellNameByKey(key: SpellKey): SpellName {
  return SpellNames[ key ]
}
