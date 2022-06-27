import { ChampionKeys } from '../Constants/ChampionKeys'
import { ChampionId, ChampionKey } from '../types'

export function getChampionKeyById(id: ChampionId): ChampionKey {
  return ChampionKeys[ id ]
}
