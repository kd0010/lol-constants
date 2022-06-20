import { SummonerSpellIds } from '../Constants/SummonerSpellIds'
import { SummonerSpellId } from '../types'

export function isSummonerSpellId(id: any): id is SummonerSpellId {
  if (SummonerSpellIds.includes(id)) return true
  return false
}
