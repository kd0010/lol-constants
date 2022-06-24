// # assets
import _champion from './assets/champion.json'
import _item from './assets/item.json'
import _runesReforged from './assets/runesReforged.json'
import _summoner from './assets/summoner.json'
export const champion = _champion
export const item = _item
export const runesReforged = _runesReforged
export const summoner = _summoner

// # Constants
export { ChampionKeys } from './Constants/ChampionKeys'
export { ChampionNames } from './Constants/ChampionNames'
export { DDPaths } from './Constants/DDPaths'
export { ItemKeys } from './Constants/ItemKeys'
export { ItemNames } from './Constants/ItemNames'
export { RuneIds } from './Constants/RuneIds'
export { RuneNames } from './Constants/RuneNames'
export { RuneSets } from './Constants/RuneSets'
export { StatRuneIds } from './Constants/StatRuneIds'
export { StatRuneNames } from './Constants/StatRuneNames'
export { StatRunes } from './Constants/StatRunes'
export { SummonerSpellIds } from './Constants/SummonerSpellIds'
export { SummonerSpellKeys } from './Constants/SummonerSpellKeys'
export { SummonerSpellNames } from './Constants/SummonerSpellNames'
export { TreeRuneIds } from './Constants/TreeRuneIds'
export { TreeRuneNames } from './Constants/TreeRuneNames'

// # generated
import _championByKey from './generated/championByKey.json'
import _championByName from './generated/championByName.json'
import _itemByName from './generated/itemByName.json'
import _runesById from './generated/runesById.json'
import _runesByName from './generated/runesByName.json'
import _summonerByKey from './generated/summonerByKey.json'
import _summonerByName from './generated/summonerByName.json'
export const championByKey = _championByKey
export const championByName = _championByName
export const itemByName = _itemByName
export const runesById = _runesById
export const runesByName = _runesByName
export const summonerByKey = _summonerByKey
export const summonerByName = _summonerByName

// # Helpers
export { getChampionKeyByName } from './Helpers/getChampionKeyByName'
export { getChampionNameByKey } from './Helpers/getChampionNameByKey'
export { getItemKeyByName } from './Helpers/getItemKeyByName'
export { getItemNameByKey } from './Helpers/getItemNameByKey'
export { getRuneIdByName } from './Helpers/getRuneIdByName'
export { getRuneNameById } from './Helpers/getRuneNameById'
export { getSummonerSpellKeyByName } from './Helpers/getSummonerSpellKeyByName'
export { getSummonerSpellNameByKey } from './Helpers/getSummonerSpellNameByKey'
export { isChampionKey } from './Helpers/isChampionKey'
export { isChampionName } from './Helpers/isChampionName'
export { isItemKey } from './Helpers/isItemKey'
export { isItemName } from './Helpers/isItemName'
export { isRuneId } from './Helpers/isRuneId'
export { isRuneName } from './Helpers/isRuneName'
export { isStatRuneId } from './Helpers/isStatRuneId'
export { isStatRuneName } from './Helpers/isStatRuneName'
export { isSummonerSpellId } from './Helpers/isSummonerSpellId'
export { isSummonerSpellKey } from './Helpers/isSummonerSpellKey'
export { isSummonerSpellName } from './Helpers/isSummonerSpellName'
export { isTreeRuneId } from './Helpers/isTreeRuneId'
export { isTreeRuneName } from './Helpers/isTreeRuneName'

// # scripts

// # types
export * from './types'
export * from './types/Meta'
