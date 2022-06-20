import championByName from '../generated/championByName.json'
import { ChampionName } from '../types'

export const ChampionNames: ChampionName[] = (
  Object.keys(championByName.data).map(name => name as keyof typeof championByName.data)
)
