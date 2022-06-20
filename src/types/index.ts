import championByKey from '../generated/championByKey.json'
import championByName from '../generated/championByName.json'
import item from '../assets/item.json'
import itemByName from '../generated/itemByName.json'
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
export type SummonerSpellId = keyof typeof summoner.data
export type SummonerSpellKey = keyof typeof summonerByKey.data
export type SummonerSpellName = keyof typeof summonerByName.data
/**
 * There are three Rune ID types:
 * `RuneId` (all),
 * `TreeRuneId` (all but stat runes),
 * `StatRuneId` (only stat runes).
 */
export type RuneId = TreeRuneId | StatRuneId
export type RuneName = TreeRuneName | StatRuneName
/**
 * There are three Rune ID types:
 * `RuneId` (all),
 * `TreeRuneId` (all but stat runes),
 * `StatRuneId` (only stat runes).
 */
export type TreeRuneId = keyof typeof runesById
export type TreeRuneName = keyof typeof runesByName
/**
 * There are three Rune ID types:
 * `RuneId` (all),
 * `TreeRuneId` (all but stat runes),
 * `StatRuneId` (only stat runes).
 */
export type StatRuneId = keyof typeof StatRunes
export type StatRuneName = typeof StatRunes[ keyof typeof StatRunes ]
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
