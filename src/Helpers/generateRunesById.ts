import fs from 'fs'
import runesReforged from '../assets/runesReforged.json'

export function generateRunesById(): void {
  const runesById: {
    [k: string]: any
  } =  {}

  // Construct the new data and assign it to product object
  for (const runeTree of runesReforged) {
    for (const { runes } of runeTree.slots) {
      for (const rune of runes) {
        runesById[ rune.id ] = rune
      }
    }
  }
  
  // Write to file
  fs.writeFileSync(
    `src/generated/runesById.json`,
    JSON.stringify(runesById),
  )
}
