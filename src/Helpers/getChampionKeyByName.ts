import championByName from '../generated/championByName.json'
import { ChampionKey, ChampionName } from '../types'

export function getChampionKeyByName(name: ChampionName): ChampionKey {
  return championByName.data[ name ].key as ChampionKey
}
