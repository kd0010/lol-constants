import { SpellIdsByName } from '../Constants/SpellIdsByName'
import { SpellId, SpellName } from '../types'

export function getSpellIdByName(name: SpellName): SpellId {
  return SpellIdsByName[ name ]
}
