import fs from 'fs'
import champion from '../assets/champion.json'

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
  fs.writeFileSync(
    `tmp/championNames.json`,
    JSON.stringify(championNames),
  )
})()
