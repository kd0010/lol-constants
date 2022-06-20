import { ChampionNames } from '../Constants/ChampionNames'
import { ChampionName } from '../types'

export function isChampionName(name: any): name is ChampionName {
  if (ChampionNames.includes(name)) return true
  return false
}
