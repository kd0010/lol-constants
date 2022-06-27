import fs from 'fs'
import { StatRunes } from '../StatRunes'
import { getExportStatement } from './Helpers/getExportStatement'

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
  const constName = 'StatRuneIds'
  fs.writeFileSync(
    `tmp/${constName}.ts`,
    getExportStatement(
      constName,
      runeIds,
    ),
  )
})()
