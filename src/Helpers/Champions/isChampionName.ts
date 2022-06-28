import { ChampionIdsByName } from '../../Constants/Champions/ChampionIdsByName'
import { ChampionName } from '../../types'

export function isChampionName(name: string): name is ChampionName {
  return name in ChampionIdsByName
}
