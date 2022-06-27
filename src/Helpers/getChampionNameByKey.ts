import { ChampionNames } from '../Constants/ChampionNames'
import { ChampionKey, ChampionName } from '../types'

export function getChampionNameByKey(key: ChampionKey): ChampionName {
  return ChampionNames[ key ]
}
