import { ChampionIds } from '../Constants/ChampionIds'
import { ChampionId, ChampionKey } from '../types'

export function getChampionIdByKey(key: ChampionKey): ChampionId {
  return ChampionIds[ key ]
}
