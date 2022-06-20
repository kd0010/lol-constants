import fs from 'fs'
import summoner from '../assets/summoner.json'

export function generateSummonerSpellsByKey(): void {
  const summonersByKey: {
    data: {
      [k: string]: any
    }
    version: string
  } = {
    data: {},
    version: '',
  }

  // Add all summoners' data to each corresponding key value
  let summonerId: keyof typeof summoner.data
  for (summonerId in summoner.data) {
    const summonerData = summoner.data[ summonerId ]
    summonersByKey.data[ summonerData.key ] = {
      ...summonerData,
    }
  }

  // Add version to the product object
  summonersByKey.version = summoner.version

  // Write to file
  fs.writeFileSync(
    `src/generated/summonerByKey.json`,
    JSON.stringify(summonersByKey),
  )
}
