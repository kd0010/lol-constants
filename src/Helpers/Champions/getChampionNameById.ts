import { ChampionKeys } from '../../Constants/Champions/ChampionKeys'
import { ChampionNames } from '../../Constants/Champions/ChampionNames'
import { ChampionId, ChampionName } from '../../types'

export function getChampionNameById(id: ChampionId): ChampionName {
  return ChampionNames[ ChampionKeys[ id ] ]
}
