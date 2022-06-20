import runesByName from '../generated/runesByName.json'
import { RuneId, RuneName, StatRuneId, TreeRuneId } from '../types'
import { StatRunes } from '../Constants/StatRunes'
import { isStatRuneName } from './isStatRuneName'

export function getRuneIdByName(name: RuneName): RuneId {
  if (isStatRuneName(name)) {
    let statRuneId: StatRuneId
    for (statRuneId in StatRunes) {
      if (StatRunes[ statRuneId ] == name) return statRuneId
    }

    // Code will never run this far
    // but this to satisfy TypeScript and not put `statRuneName` in tree runes.
    return '5001'
  }

  return runesByName[ name ].id as unknown as TreeRuneId
}
