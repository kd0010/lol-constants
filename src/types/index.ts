import championByKey from '../generated/championByKey.json'
import championByName from '../generated/championByName.json'

export type ChampionName = keyof typeof championByName.data
export type ChampionKey = keyof typeof championByKey.data
export type XP = number
export type Minute = number

export type TPosition =
  | 'TOP'
  | 'JUNGLE'
  | 'MIDDLE'
  | 'BOTTOM'
  | 'UTILITY'

export type TLane =
  | 'TOP'
  | 'JUNGLE'
  | 'MIDDLE'
  | 'BOTTOM'

export type TRole =
  | 'NONE'
  | 'SOLO'
  | 'CARRY'
  | 'SUPPORT'
