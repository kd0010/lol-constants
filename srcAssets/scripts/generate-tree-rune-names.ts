import fs from 'fs'
import runesReforged from '../runesReforged.json'
import { getExportStatement } from './Helpers/getExportStatement'

(async () => {
  const runeIds: {
    [runeName: string]: any
  } = {}

  // Construct the new data and assign it to product object
  for (const runeTree of runesReforged) {
    for (const { runes } of runeTree.slots) {
      for (const rune of runes) {
        runeIds[ rune.id ] = rune.name
      }
    }
  }
  
  // Write to file
  const constName = 'TreeRuneNames'
  fs.writeFileSync(
    `tmp/${constName}.ts`,
    getExportStatement(
      constName,
      runeIds,
    ),
  )
})()
