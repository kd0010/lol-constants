import fs from 'fs'
import champion from '../champion.json'
import { getExportStatement } from './Helpers/getExportStatement'

(async () => {
  const championKeys: {
    [championId: string]: string
  } = {}

  // Add all champions' data to each corresponding key value
  let championId: keyof typeof champion.data
  for (championId in champion.data) {
    const championData = champion.data[ championId ]
    championKeys[championId] = championData.key
  }

  // Write to file
  const constName = 'ChampionKeys'
  fs.writeFileSync(
    `tmp/${constName}.ts`,
    getExportStatement(
      constName,
      championKeys,
    ),
  )
})()
