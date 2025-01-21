import {
  failsafeSpell,
  SpellId,
  SpellKey,
  spellKeys,
  SpellName,
  spellNames,
  Spells,
} from '../objects/generated/Spells'

/** Get a summoner spell by its **id**, **key** or **name**. */
export function getSpell(id_key_name: SpellId | SpellKey | SpellName): typeof Spells[keyof typeof Spells] {
  if (typeof id_key_name == 'number') return Spells[id_key_name]
  if (isSpellKey(id_key_name)) return Spells[spellKeys[id_key_name]]
  return Spells[spellNames[id_key_name]] ?? failsafeSpell
}

export function isSpellId(id: number | null | undefined): id is SpellId {
  return typeof id == 'number' && id in Spells
}

export function isSpellKey(key: string | null | undefined): key is SpellKey {
  return typeof key == 'string' && key in spellKeys
}

export function isSpellName(name: string | null | undefined): name is SpellName {
  return typeof name == 'string' && name in spellNames
}
