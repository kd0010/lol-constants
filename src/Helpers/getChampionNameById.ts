import { ChampionKeys } from '../Constants/ChampionKeys'
import { ChampionNames } from '../Constants/ChampionNames'
import { ChampionId, ChampionName } from '../types'

export function getChampionNameById(id: ChampionId): ChampionName {
  return ChampionNames[ ChampionKeys[ id ] ]
}
