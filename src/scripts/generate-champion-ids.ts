import fs from 'fs'
import champion from '../assets/champion.json'

(async () => {
  const championIds: {
    [championKey: string]: string
  } = {}
  
  // Extract all Champion IDs
  let championId: keyof typeof champion.data
  for (championId in champion.data) {
    const championData = champion.data[ championId ]
    championIds[championData.key] = championId
  }
  
  // Write to tmp file
  fs.writeFileSync(
    `tmp/championIds.json`,
    JSON.stringify(championIds),
  )
})()
