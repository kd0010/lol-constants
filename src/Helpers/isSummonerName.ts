import { SummonerNames } from '../Constants/SummonerNames'
import { SummonerName } from '../types'

export function isSummonerName(name: any): name is SummonerName {
  if (SummonerNames.includes(name)) return true
  return false
}
