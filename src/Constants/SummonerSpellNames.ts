import summonerByName from '../assets/generated/summonerByName.json'
import { SummonerSpellName } from '../types'

export const SummonerSpellNames: SummonerSpellName[] = (
  Object.keys(summonerByName.data).map(name => name as keyof typeof summonerByName.data)
)
