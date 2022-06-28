import { ChampionIdsByName } from '../../Constants/Champions/ChampionIdsByName'
import { ChampionKeys } from '../../Constants/Champions/ChampionKeys'
import { ChampionKey, ChampionName } from '../../types'

export function getChampionKeyByName(name: ChampionName): ChampionKey {
  return ChampionKeys[ ChampionIdsByName[ name ] ]
}
