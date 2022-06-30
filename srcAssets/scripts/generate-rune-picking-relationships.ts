import runesReforged from '../runesReforged.json'
import { writeToTmpFile } from './Helpers/writeToTmpFile'

(async () => {
  const constant = 'RunePickingRelationships'
  const relationships: {
    [runeId: string]: string[]
  } = {}

  // Determine all of the runes (2-3) that each rune in the game
  // has a horizontal-set "relationship" with.
  // It means that they are dependent on that rune
  // for picking purposes.
  // Only one rune can be picked per h-set.
  for (const category of runesReforged) {
    for (const {
      runes,
    } of category.slots) {
      for (const {
        id: baseRuneId,
      } of runes) {
        // Assign each of the neighboring runes to this rune's r-ship array.
        for (const {
          id,
        } of runes) {
          // Let us simply assume that there is no such thing as a relationship
          // with oneself, therefore skip.
          if (baseRuneId == id) continue
          if (!relationships[baseRuneId]) relationships[baseRuneId] = []
          relationships[baseRuneId]!.push(String(id))
        }
      }
    }
  }

  // Create workshop arrays for each horizontal-set of stat runes.
  const offense = ['5005','5007','5008']
  const flex = ['5002f','5003f','5008f']
  const defense = ['5001','5002','5003']

  for (let hSet of [
    offense,
    flex,
    defense,
  ]) {
    for (let baseStatRuneId of hSet) {
      for (let statRuneId of hSet) {
        // Skip self
        if (baseStatRuneId == statRuneId) continue
        
        if (!relationships[baseStatRuneId]) relationships[baseStatRuneId] = []
        relationships[baseStatRuneId]!.push(statRuneId)
      }
    }
  }

  await writeToTmpFile(
    constant,
    {
      constName: constant,
      comment: `All of the runes and their relationships to other runes in terms of picking. Only one rune can be picked in a rune horizontal-set, each main rune that has a relationship to another rune unselects the other rune if the main rune is picked.`,
      json: relationships,
    },
  )
})()
