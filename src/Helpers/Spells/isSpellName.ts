import { SpellIdsByName } from '../../Constants/Spells/SpellIdsByName'
import { SpellName } from '../../types'

export function isSpellName(name: any): name is SpellName {
  return name in SpellIdsByName
}
