import fs from 'fs'
import champion from '../champion.json'
import { getExportStatement } from './Helpers/getExportStatement'

(async () => {
  const championNames: {
    [championKey: string]: string
  } = {}

  // Extract all champion names from `champion.json`
  let championId: keyof typeof champion.data
  for (championId in champion.data) {
    const championData = champion.data[ championId ]
    championNames[championData.key] = championData.name
  }

  // Write to file
  const constName = 'ChampionNames'
  fs.writeFileSync(
    `tmp/${constName}.ts`,
    getExportStatement(
      constName,
      championNames,
    ),
  )
})()
