import summonerByName from '../generated/summonerByName.json'
import { SummonerName } from '../types'

export const SummonerNames: SummonerName[] = (
  Object.keys(summonerByName.data).map(name => name as keyof typeof summonerByName.data)
)
