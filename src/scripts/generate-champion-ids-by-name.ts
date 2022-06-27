import fs from 'fs'
import champion from '../assets/champion.json'
import { getExportStatement } from './Helpers/getExportStatement'

(async () => {
  const championIds: {
    [championName: string]: string
  } = {}
  
  // Extract all Champion IDs
  let championId: keyof typeof champion.data
  for (championId in champion.data) {
    const championData = champion.data[ championId ]
    championIds[championData.name] = championId
  }
  
  // Write to tmp file
  const constName = 'ChampionIdsByName'
  fs.writeFileSync(
    `tmp/${constName}.ts`,
    getExportStatement(
      constName,
      championIds,
    ),
  )
})()
