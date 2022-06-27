import { SpellIds } from '../Constants/SpellIds'
import { SpellId, SpellKey } from '../types'

export function getSpellIdByKey(key: SpellKey): SpellId {
  return SpellIds[ key ]
}
