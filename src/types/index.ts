import championByKey from '../generated/championByKey.json'
import championByName from '../generated/championByName.json'
import item from '../assets/item.json'
import itemByName from '../generated/itemByKey.json'
import summoner from '../assets/summoner.json'
import summonerByKey from '../generated/summonerByKey.json'
import summonerByName from '../generated/summonerByName.json'
import runesById from '../generated/runesById.json'
import { StatRunes } from '../Constants/StatRunes'
import runesByName from '../generated/runesByName.json'

export type ChampionKey = keyof typeof championByKey.data
export type ChampionName = keyof typeof championByName.data
export type ItemKey = keyof typeof item.data
export type ItemName = keyof typeof itemByName.data
export type SummonerId = keyof typeof summoner.data
export type SummonerKey = keyof typeof summonerByKey.data
export type SummonerName = keyof typeof summonerByName.data
export type RuneId = keyof typeof runesById | keyof typeof StatRunes
/**
 * Does not include stat runes,
 * because their names are rather vague.
 */
export type RuneName = keyof typeof runesByName
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

export type Level =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18

export type Skill =
  | 'Q'
  | 'W'
  | 'E'
  | 'R'
