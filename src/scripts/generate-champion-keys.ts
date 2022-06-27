import fs from 'fs'
import champion from '../assets/champion.json'

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
  fs.writeFileSync(
    `tmp/championKeys.json`,
    JSON.stringify(championKeys),
  )
})()
