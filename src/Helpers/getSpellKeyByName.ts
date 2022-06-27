import { SpellIdsByName } from '../Constants/SpellIdsByName'
import { SpellKeys } from '../Constants/SpellKeys'
import { SpellKey, SpellName } from '../types'

export function getSpellKeyByName(name: SpellName): SpellKey {
  return SpellKeys[ SpellIdsByName[ name ] ]
}
