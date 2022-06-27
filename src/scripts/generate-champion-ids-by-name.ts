import fs from 'fs'
import champion from '../assets/champion.json'

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
  fs.writeFileSync(
    `tmp/championIdsByName.json`,
    JSON.stringify(championIds),
  )
})()
