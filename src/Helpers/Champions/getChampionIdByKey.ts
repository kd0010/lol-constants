import { ChampionIds } from '../../Constants/Champions/ChampionIds'
import { ChampionId, ChampionKey } from '../../types'

export function getChampionIdByKey(key: ChampionKey): ChampionId {
  return ChampionIds[ key ]
}
