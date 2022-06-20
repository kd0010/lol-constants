import championByKey from '../generated/championByKey.json'
import { ChampionKey, ChampionName } from '../types'

export function getChampionNameByKey(key: ChampionKey): ChampionName {
  return championByKey.data[ key ].name as ChampionName
}
