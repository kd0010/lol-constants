import { ChampionIdsByName } from '../Constants/ChampionIdsByName'
import { ChampionKeys } from '../Constants/ChampionKeys'
import { ChampionKey, ChampionName } from '../types'

export function getChampionKeyByName(name: ChampionName): ChampionKey {
  return ChampionKeys[ ChampionIdsByName[ name ] ]
}
