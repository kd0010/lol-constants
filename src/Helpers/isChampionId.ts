import { ChampionKeys } from '../Constants/ChampionKeys'
import { ChampionId } from '../types'

export function isChampionId(id: string): id is ChampionId {
  return id in ChampionKeys
}
