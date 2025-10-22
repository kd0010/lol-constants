import {StatRuneSlot} from '../enums/StatRuneSlots'
import {
  RuneId,
  RuneKey,
  RuneName,
  RuneTreeId,
  RuneTreeKey,
  RuneTreeName,
  RuneTrees,
  Runes,
  StatRuneId,
  StatRuneName,
  StatRunes,
  StatRunesInSlot,
  StatRunesInSlotArr,
  runeKeys,
  runeNames,
  runeTreeKeys,
  runeTreeNames,
  statRuneNames,
} from '../objects/generated/Runes'
import {MergeKeys} from './type'

/** Get a rune by its **id**, **key**, or **name**. */
export function getRune(id_key_name: RuneId | RuneKey | RuneName): typeof Runes[keyof typeof Runes] {
  if (typeof id_key_name == 'number') return Runes[id_key_name]
  if (isRuneKey(id_key_name)) return Runes[runeKeys[id_key_name]]
  return Runes[runeNames[id_key_name]]
}

type StatRune = MergeKeys<typeof StatRunes[keyof typeof StatRunes]>
type StatRuneInSlot = MergeKeys<typeof StatRunesInSlotArr[number]>
type SlotOfStatRune<T> = T extends StatRuneId ? keyof typeof StatRunesInSlot[T] : T extends StatRuneName ? keyof typeof StatRunesInSlot[typeof statRuneNames[T]] : undefined
/**
 * Get a stat rune by its **id** or **name**.
 * 
 * ---
 * Optionally, receive a `horizontal` and `slot` property in the stat rune object
 * by providing a value for the secondary function parameter `slot`.
 * `horizontal` provides ids of other stat runes that are in the same row as gotten stat rune.
 */
export function getStatRune(id_name: StatRuneId | StatRuneName): StatRune
/**
 * Get a stat rune by its **id** or **name**.
 * 
 * ---
 * Optionally, receive a `horizontal` and `slot` property in the stat rune object
 * by providing a value for the secondary function parameter `slot`.
 * `horizontal` provides ids of other stat runes that are in the same row as gotten stat rune.
 */
export function getStatRune<
  T extends StatRuneId | StatRuneName,
  S extends SlotOfStatRune<T>
>(
  id_name: T,
  slot?: S
): StatRuneInSlot

export function getStatRune(id_name: StatRuneId | StatRuneName, slot?: number) {
  const statRuneSlot = slot as StatRuneSlot | undefined

  if (typeof id_name == 'number') {
    const statRuneId = id_name as StatRuneId
    if (statRuneSlot == null) {
      return StatRunes[statRuneId]
    } else {
      const x = StatRunesInSlot[statRuneId]
      if (statRuneSlot in StatRunesInSlot[statRuneId]) return StatRunesInSlot[statRuneId][statRuneSlot as keyof typeof StatRunesInSlot[typeof statRuneId]]
      console.warn(`ended up with empty object while getting stat rune`)
      return {} // should not reach
    }
  } else {
    const statRuneName = id_name as StatRuneName
    if (statRuneSlot == null) {
      return StatRunes[statRuneNames[statRuneName]]
    } else {
      const statRuneId = statRuneNames[statRuneName]
      if (statRuneSlot in StatRunesInSlot[statRuneId]) return StatRunesInSlot[statRuneId][statRuneSlot as keyof typeof StatRunesInSlot[typeof statRuneId]]
      console.warn(`ended up with empty object while getting stat rune`)
      return {} // should not reach
    }
  }
}

/** Get a rune tree by its **id**, **key**, or **name**. */
export function getRuneTree(id_key_name: RuneTreeId | RuneTreeKey | RuneTreeName): typeof RuneTrees[keyof typeof RuneTrees] {
  if (typeof id_key_name == 'number') return RuneTrees[id_key_name]
  if (isRuneTreeKey(id_key_name)) return RuneTrees[runeTreeKeys[id_key_name]]
  return RuneTrees[runeTreeNames[id_key_name]]
}

export function isRuneId(id: number | null | undefined): id is RuneId {
  return typeof id == 'number' && id in Runes
}

export function isRuneKey(key: string | null | undefined): key is RuneKey {
  return typeof key == 'string' && key in runeKeys
}

export function isRuneName(name: string | null | undefined): name is RuneName {
  return typeof name == 'string' && name in runeNames
}

export function isRune(id_key_name: number | string | null | undefined): id_key_name is RuneId | RuneKey | RuneName {
  return typeof id_key_name == 'number' ? isRuneId(id_key_name) : (isRuneKey(id_key_name) || isRuneName(id_key_name))
}

export function isStatRuneId(id: number | null | undefined): id is StatRuneId {
  return typeof id == 'number' && id in StatRunes
}

export function isStatRuneName(name: string | null | undefined): name is StatRuneName {
  return typeof name == 'string' && name in statRuneNames
}

export function isStatRune(id_name: number | string | null | undefined): id_name is StatRuneId | StatRuneName {
  return typeof id_name == 'number' ? isStatRuneId(id_name) : isStatRuneName(id_name)
}

export function isRuneTreeId(id: number | null | undefined): id is RuneTreeId {
  return typeof id == 'number' && id in RuneTrees
}

export function isRuneTreeKey(key: string | null | undefined): key is RuneTreeKey {
  return typeof key == 'string' && key in runeTreeKeys
}

export function isRuneTreeName(name: string | null | undefined): name is RuneTreeName {
  return typeof name == 'string' && name in runeTreeNames
}

export function isRuneTree(id_key_name: number | string | null | undefined): id_key_name is RuneTreeId | RuneTreeKey | RuneTreeName {
  return typeof id_key_name == 'number' ? isRuneTreeId(id_key_name) : (isRuneTreeKey(id_key_name) || isRuneTreeName(id_key_name))
}
