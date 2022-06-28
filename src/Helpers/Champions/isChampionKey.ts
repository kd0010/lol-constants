import { ChampionNames } from '../../Constants/Champions/ChampionNames'
import { ChampionKey } from '../../types'

export function isChampionKey(key: string): key is ChampionKey {
  return key in ChampionNames
}
