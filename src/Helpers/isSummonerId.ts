import { SummonerIds } from '../Constants/SummonerIds'
import { SummonerId } from '../types'

export function isSummonerId(id: any): id is SummonerId {
  if (SummonerIds.includes(id)) return true
  return false
}
