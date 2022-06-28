import { ChampionKeys } from '../../Constants/Champions/ChampionKeys'
import { ChampionId, ChampionKey } from '../../types'

export function getChampionKeyById(id: ChampionId): ChampionKey {
  return ChampionKeys[ id ]
}
