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
    runeIds[ statRuneName ] = statRuneId
  }
  
  // Write to file
  fs.writeFileSync(
    `tmp/statRuneIds.json`,
    JSON.stringify(runeIds),
  )
})()
