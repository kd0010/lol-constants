import fs from 'fs'
import champion from '../assets/champion.json'

export function generateChampionsByName(): void {
  const championsByName: {
    data: {
      [k: string]: typeof champion.data.Aatrox
    }
    version: string
  } = {
    data: {},
    version: '',
  }

  // Extract all champion names from `champion.json`
  let championId: keyof typeof champion.data
  for (championId in champion.data) {
    const championData = champion.data[ championId ]
    championsByName.data[ championData.name ] = championData
  }

  // Add version to the product object
  championsByName.version = champion.version

  // Write to file
  fs.writeFileSync(
    `src/generated/championByName.json`,
    JSON.stringify(championsByName)
  )
}
