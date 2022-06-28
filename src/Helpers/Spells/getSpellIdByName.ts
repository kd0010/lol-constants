import { SpellIdsByName } from '../../Constants/Spells/SpellIdsByName'
import { SpellId, SpellName } from '../../types'

export function getSpellIdByName(name: SpellName): SpellId {
  return SpellIdsByName[ name ]
}
