import fs from 'fs'
import runesReforged from '../assets/runesReforged.json'

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
  
  // Write to file
  fs.writeFileSync(
    `tmp/treeRuneIds.json`,
    JSON.stringify(runeIds),
  )
})()
