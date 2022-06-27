import fs from 'fs'
import runesReforged from '../assets/runesReforged.json'
import { StatRunes } from '../assets/StatRunes'

(async () => {
  const runeIds: {
    [runeName: string]: any
  } = {}

  // Construct the new data and assign it to product object
  for (const runeTree of runesReforged) {
    for (const { runes } of runeTree.slots) {
      for (const rune of runes) {
        runeIds[ rune.name ] = String(rune.id)
      }
    }
  }

  // Add Stat Runes
  let statRuneId: keyof typeof StatRunes
  for (statRuneId in StatRunes) {
    const statRuneName = StatRunes[ statRuneId ]
    runeIds[ statRuneName ] = statRuneId
  }
  
  // Write to file
  fs.writeFileSync(
    `tmp/runeIds.json`,
    JSON.stringify(runeIds),
  )
})()
