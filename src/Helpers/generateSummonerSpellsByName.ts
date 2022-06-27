import fs from 'fs'
import summoner from '../assets/summoner.json'

export function generateSummonerSpellsByName(): void {
  const summonersByName: {
    data: {
      [k: string]: any
    }
    version: string
  } = {
    data: {},
    version: '',
  }

  // Add all summoners' data to each corresponding name value
  let summonerId: keyof typeof summoner.data
  for (summonerId in summoner.data) {
    const summonerData = summoner.data[ summonerId ]
    summonersByName.data[ summonerData.name ] = {
      ...summonerData,
    }
  }

  // Add version to the product object
  summonersByName.version = summoner.version

  // Write to file
  fs.writeFileSync(
    `src/assets/generated/summonerByName.json`,
    JSON.stringify(summonersByName),
  )
}
