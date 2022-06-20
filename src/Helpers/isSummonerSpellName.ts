import { SummonerSpellNames } from '../Constants/SummonerSpellNames'
import { SummonerSpellName } from '../types'

export function isSummonerSpellName(name: any): name is SummonerSpellName {
  if (SummonerSpellNames.includes(name)) return true
  return false
}
