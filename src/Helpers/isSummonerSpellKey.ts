import { SummonerSpellKeys } from '../Constants/SummonerSpellKeys'
import { SummonerSpellKey } from '../types'

export function isSummonerSpellKey(key: any): key is SummonerSpellKey {
  if (SummonerSpellKeys.includes(key)) return true
  return false
}
