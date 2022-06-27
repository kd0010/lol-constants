import { SpellIdsByName } from '../Constants/SpellIdsByName'
import { SpellName } from '../types'

export function isSpellName(name: string): name is SpellName {
  return name in SpellIdsByName
}
