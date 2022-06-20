import summoner from '../assets/summoner.json'
import { SummonerId } from '../types'

export const SummonerIds: SummonerId[] = (
  Object.keys(summoner.data).map(id => id as keyof typeof summoner.data)
)
