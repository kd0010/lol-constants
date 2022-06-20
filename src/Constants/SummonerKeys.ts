import summonerByKey from '../generated/summonerByKey.json'
import { SummonerKey } from '../types'

export const SummonerKeys: SummonerKey[] = (
  Object.keys(summonerByKey.data).map(key => key as keyof typeof summonerByKey.data)
)
