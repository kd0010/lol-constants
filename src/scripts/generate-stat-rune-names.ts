import fs from 'fs'
import { StatRunes } from '../assets/StatRunes'

(async () => {
  const runeIds: {
    [runeName: string]: any
  } = {}

  // Add Stat Runes
  let statRuneId: keyof typeof StatRunes
  for (statRuneId in StatRunes) {
    const statRuneName = StatRunes[ statRuneId ]
    runeIds[ statRuneId ] = statRuneName
  }
  
  // Write to file
  fs.writeFileSync(
    `tmp/statRuneNames.json`,
    JSON.stringify(runeIds),
  )
})()
