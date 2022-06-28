import { SpellIdsByName } from '../../Constants/Spells/SpellIdsByName'
import { SpellKeys } from '../../Constants/Spells/SpellKeys'
import { SpellKey, SpellName } from '../../types'

export function getSpellKeyByName(name: SpellName): SpellKey {
  return SpellKeys[ SpellIdsByName[ name ] ]
}
