import summonerByKey from '../assets/generated/summonerByKey.json'
import { SummonerSpellKey } from '../types'

export const SummonerSpellKeys: SummonerSpellKey[] = (
  Object.keys(summonerByKey.data).map(key => key as keyof typeof summonerByKey.data)
)
