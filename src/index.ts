// # .
export {lol} from './lol'
export {Patch} from './Patch'

// # constants
export * from './constants/custom'
export * from './constants/events'
export * from './constants/history'
export * from './constants/leagues'
export * from './constants/locales'
export * from './constants/participants'

// # enums
export {ItemSrTypes} from './enums/ItemSrTypes'
export {StatRuneSlots} from './enums/StatRuneSlots'

// # helpers
export {
  getChampion,
  isChampionId,
  isChampionKey,
  isChampionName,
  isChampion,
} from './helpers/champion'
export {
  getItem,
  isStarterItem,
  isBasicItem,
  isEpicItem,
  isLegendaryItem,
  isTrinketItem,
  isBootsItem,
  isConsumableItem,
  isItemAvailableOnMap,
  isItemId,
  isItemName,
  isItem,
} from './helpers/item'
export type {RiotId} from './helpers/riotId'
export {
  makeRiotId,
  splitRiotId,
  validateRiotId,
} from './helpers/riotId'
export {
  getRune,
  getStatRune,
  getRuneTree,
  isRuneId,
  isRuneKey,
  isRuneName,
  isRune,
  isStatRuneId,
  isStatRuneName,
  isStatRune,
  isRuneTreeId,
  isRuneTreeKey,
  isRuneTreeName,
  isRuneTree,
} from './helpers/rune'
export {
  getSpell,
  isSpellId,
  isSpellKey,
  isSpellName,
  isSpell,
} from './helpers/spell'

// # objects
export type {MapId, MapTitle} from './objects/Maps'
export {MapsArr as Maps, getMap, isMapId, isMapTitle} from './objects/Maps'
export type {QueueId, QueueTitle} from './objects/Queues'
export {
  QueuesArr as Queues,
  isQueueId,
  isQueueTitle,
  isQueue,
  getQueue,
} from './objects/Queues'
export type {Platform, Region} from './objects/Regions'
export {
  RegionsArr as Regions,
  getRegion,
  isPlatform,
  isRegion,
} from './objects/Regions'
// ## generated
export {ChampionsArr as Champions} from './objects/generated/Champions'
export type {
  ChampionId,
  ChampionKey,
  ChampionName,
} from './objects/generated/Champions'
export {ItemsArr as Items} from './objects/generated/Items'
export type {
  ItemId,
  ItemName,
} from './objects/generated/Items'
export {
  RunesArr as Runes,
  StatRunesArr as StatRunes,
  RuneTreesArr as RuneTrees,
} from './objects/generated/Runes'
export type {
  RuneId,
  RuneKey,
  RuneName,
  StatRuneId,
  StatRuneName,
  RuneTreeId,
  RuneTreeKey,
  RuneTreeName,
} from './objects/generated/Runes'
export {SpellsArr as Spells} from './objects/generated/Spells'
export type {
  SpellId,
  SpellKey,
  SpellName,
} from './objects/generated/Spells'
