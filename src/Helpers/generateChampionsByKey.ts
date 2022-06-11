import fs from 'fs'
import champion from '../assets/champion.json'

export function generateChampionsByKey(): void {
  const championsByKey: {
    data: {
      [k: string]: typeof champion.data.Aatrox
    }
    version: string
  } = {
    data: {},
    version: '',
  }

  // Add all champions' data to each corresponding key value
  let championId: keyof typeof champion.data
  for (championId in champion.data) {
    const championData = champion.data[ championId ]
    championsByKey.data[ championData.key ] = championData
  }

  // Add version to the product object
  championsByKey.version = champion.version

  // Write to file
  fs.writeFileSync(
    `src/generated/championByKey.json`,
    JSON.stringify(championsByKey)
  )
}
