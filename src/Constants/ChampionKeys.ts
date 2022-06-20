import championByKey from '../generated/championByKey.json'
import { ChampionKey } from '../types'

export const ChampionKeys: ChampionKey[] = (
  Object.keys(championByKey.data).map(key => key as keyof typeof championByKey.data)
)
