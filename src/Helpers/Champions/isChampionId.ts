import { ChampionKeys } from '../../Constants/Champions/ChampionKeys'
import { ChampionId } from '../../types'

export function isChampionId(id: any): id is ChampionId {
  return id in ChampionKeys
}
