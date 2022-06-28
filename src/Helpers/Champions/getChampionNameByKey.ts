import { ChampionNames } from '../../Constants/Champions/ChampionNames'
import { ChampionKey, ChampionName } from '../../types'

export function getChampionNameByKey(key: ChampionKey): ChampionName {
  return ChampionNames[ key ]
}
