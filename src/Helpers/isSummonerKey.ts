import { SummonerKeys } from '../Constants/SummonerKeys'
import { SummonerKey } from '../types'

export function isSummonerKey(key: any): key is SummonerKey {
  if (SummonerKeys.includes(key)) return true
  return false
}
