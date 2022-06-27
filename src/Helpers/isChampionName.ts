import { ChampionIdsByName } from '../Constants/ChampionIdsByName'
import { ChampionName } from '../types'

export function isChampionName(name: string): name is ChampionName {
  return name in ChampionIdsByName
}
