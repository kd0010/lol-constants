import fs from 'fs'
import runesReforged from '../assets/runesReforged.json'

export function generateRunesByName(): void {
  const runesByName: {
    [k: string]: any
  } =  {}

  // Construct the new data and assign it to product object
  for (const runeTree of runesReforged) {
    for (const { runes } of runeTree.slots) {
      for (const rune of runes) {
        runesByName[ rune.name ] = rune
      }
    }
  }
  
  // Write to file
  fs.writeFileSync(
    `src/assets/generated/runesByName.json`,
    JSON.stringify(runesByName),
  )
}
