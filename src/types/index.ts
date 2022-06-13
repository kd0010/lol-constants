import championByKey from '../generated/championByKey.json'
import championByName from '../generated/championByName.json'
import item from '../assets/item.json'
import itemByName from '../generated/itemByKey.json'

export type ChampionKey = keyof typeof championByKey.data
export type ChampionName = keyof typeof championByName.data
export type ItemKey = keyof typeof item.data
export type ItemName = keyof typeof itemByName.data
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
