import { SpellIds } from '../../Constants/Spells/SpellIds'
import { SpellId, SpellKey } from '../../types'

export function getSpellIdByKey(key: SpellKey): SpellId {
  return SpellIds[ key ]
}
