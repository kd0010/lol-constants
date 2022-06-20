import { ChampionKeys } from '../Constants/ChampionKeys'
import { ChampionKey } from '../types'

export function isChampionKey(key: any): key is ChampionKey {
  if (ChampionKeys.includes(key)) return true
  return false
}
