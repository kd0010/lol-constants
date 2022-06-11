import championByKey from '../generated/championByKey.json'
import championByName from '../generated/championByName.json'

export type ChampionName = keyof typeof championByName.data
export type ChampionKey = keyof typeof championByKey.data
