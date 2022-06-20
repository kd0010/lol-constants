import summoner from '../assets/summoner.json'
import { SummonerSpellId } from '../types'

export const SummonerSpellIds: SummonerSpellId[] = (
  Object.keys(summoner.data).map(id => id as keyof typeof summoner.data)
)
