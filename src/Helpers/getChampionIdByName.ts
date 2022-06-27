import { ChampionIdsByName } from '../Constants/ChampionIdsByName'
import { ChampionId, ChampionName } from '../types'

export function getChampionIdByName(name: ChampionName): ChampionId {
  return ChampionIdsByName[ name ]
}
