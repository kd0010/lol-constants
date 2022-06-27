import fs from 'fs'
import runesReforged from '../assets/runesReforged.json'
import { StatRunes } from '../assets/StatRunes'

(async () => {
  const runeNames: {
    [runeId: string]: any
  } = {}

  // Construct the new data and assign it to product object
  for (const runeTree of runesReforged) {
    for (const { runes } of runeTree.slots) {
      for (const rune of runes) {
        runeNames[ rune.id ] = rune.name
      }
    }
  }

  // Add Stat Runes
  let statRuneId: keyof typeof StatRunes
  for (statRuneId in StatRunes) {
    const statRuneName = StatRunes[ statRuneId ]
    runeNames[ statRuneId ] = statRuneName
  }
  
  // Write to file
  fs.writeFileSync(
    `tmp/runeNames.json`,
    JSON.stringify(runeNames),
  )
})()
