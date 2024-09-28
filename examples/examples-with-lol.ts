// Information in this file is up-to-date as of 28 September 2024.

import {
  BuildingType,
  BuildingTypes,
  ChampionClass,
  ChampionClasses,
  DragonType,
  DragonTypes,
  GameMode,
  GameModes,
  GameType,
  GameTypes,
  getChampion,
  getItem,
  getMap,
  getQueue,
  getRegion,
  getRune,
  getRuneTree,
  getSpell,
  getStatRune,
  isBasicItem,
  isBuildingType,
  isChampionClass,
  isDragonType,
  isGameMode,
  isGameType,
  isItemAvailableOnMap,
  isKillType,
  isLane,
  isLaneType,
  isLegendaryItem,
  isLocale,
  isMonsterType,
  isPosition,
  isQueueType,
  isRankedRank,
  isRankedTier,
  isRole,
  isTeamId,
  isTowerType,
  isWardType,
  Items,
  ItemSrTypes,
  KillType,
  KillTypes,
  Lane,
  Lanes,
  LaneType,
  LaneTypes,
  Locale,
  Locales,
  lol,
  Maps,
  MonsterType,
  MonsterTypes,
  Patch,
  Position,
  Positions,
  Queues,
  QueueType,
  QueueTypes,
  RankedRank,
  RankedRanks,
  RankedTier,
  RankedTiers,
  Regions,
  Role,
  Roles,
  Runes,
  RuneTrees,
  Spells,
  StatRunes,
  StatRuneSlots,
  TeamId,
  TeamIds,
  TowerType,
  TowerTypes,
  WardType,
  WardTypes,
} from 'lol-constants'



// ## Version — Current League Patch
lol.version || Patch.version // '14.19'



// ## Champions
const champ = lol.champion.get('Wukong')
champ.id   // 62
champ.key  // 'MonkeyKing'
champ.name // 'Wukong'

// Similarly...
const champ = getChampion('Wukong')     // {id: 62, key: 'MonkeyKing', name: 'Wukong'}
const champ = getChampion('MonkeyKing') // {id: 62, key: 'MonkeyKing', name: 'Wukong'}
const champ = getChampion(62)           // {id: 62, key: 'MonkeyKing', name: 'Wukong'}

// Every single property in `lol` that has a `get` function
// also has a `list` property that can be iterated over.
for (const {id, key, name} of lol.champion.list) {}



// ## Items
const item = lol.item.get('B. F. Sword') || getItem('B. F. Sword') // {id: 1038, name: 'B. F. Sword', srType: 1}

lol.item.isStarter('B. F. Sword')    // false
lol.item.isBasic('B. F. Sword')      // true
lol.item.isEpic('B. F. Sword')       // false
lol.item.isLegendary('B. F. Sword')  // false
lol.item.isTrinket('B. F. Sword')    // false
lol.item.isBoots('B. F. Sword')      // false
lol.item.isConsumable('B. F. Sword') // false

// Alternatively...
isBasicItem('Cloth Armor') && isBasicItem(1029) // true
// etc.

// Passing the whole item object like this would come in handy
// if you're iterating over `list` or otherwise.
const infinityEdge = getItem('Infinity Edge')
isLegendaryItem(infinityEdge)      // true
isLegendaryItem(infinityEdge.id)   // true
isLegendaryItem(infinityEdge.name) // true

// Check if item is available on a certain map
const item = getItem('B. F. Sword')
const map = getMap("Summoner's Rift")
lol.item.isAvailable(item.id, map.id) && isItemAvailableOnMap(item.id, map.id) // true

// Using enum `ItemSrTypes`
if (item.srType == lol.enum.ItemSrTypes.BASIC) {}
if (item.srType == ItemSrTypes.BASIC) {}

// `list`
for (const {id, name, srType} of Items) { // Items === lol.item.list
  // Can do this also
  if (isLegendaryItem(id)) {}
  if (srType == ItemSrTypes.LEGENDARY) {}

  // Or
  if (!isBasicItem(id)) continue
  // do stuff with basic items ...
}



// ## Runes
const rune = lol.rune.get('Absolute Focus') || getRune('Absolute Focus') // {id: 8233, key: 'AbsoluteFocus', name: 'Absolute Focus', treeId: 8200, isKeystone: false, slot: 2, horizontal: [8210, 8234]}
rune.id // 8233 satisfies RuneId
rune.name // 'Absolute Focus' satisfies RuneName
rune.treeId // 8200 satisfies RuneTreeId
rune.isKeystone // false
rune.slot // 2 satisfies 0 | 1 | 2 | 3
// `horizontal` contains neighboring rune ids (that are on the same row)
rune.horizontal // [8210, 8234] satisfies readonly RuneId[]

// Stat runes
const statRune = lol.rune.stat.get('Move Speed') || getStatRune('Move Speed') // {id: 5010, name: 'Move Speed', description: '+2% Move Speed', value: 0.02}

// Passing a secondary argument to `getStatRune`
// returns two additional properties: `horizontal` and `slot`
// Let's use an enum. (StatRuneSlots === lol.enum.StatRuneSlots)
getStatRune('Adaptive Force', StatRuneSlots.OFFENSE) // {horizontal: [5005, 5007], slot: 0, ...}
getStatRune('Adaptive Force', StatRuneSlots.FLEX)    // {horizontal: [5010, 5001], slot: 1, ...}
getStatRune('Adaptive Force', StatRuneSlots.DEFENSE) // TypeScript won't compile

// Runes trees
const runeTree = lol.rune.tree.get('Domination') || getRuneTree('Domination') // {id: 8100, key: 'Domination', name: 'Domination'}

// `list`s
lol.rune.list || Runes
lol.rune.stat.list || StatRunes
lol.rune.tree.list || RuneTrees


// ## Spells
const summonerSpell = lol.spell.get('Flash') || getSpell('Flash') // {id: 4, key: 'SummonerFlash', name: 'Flash'}
summonerSpell.id   // 4
summonerSpell.key  // 'SummonerFlash'
summonerSpell.name // 'Flash'

// `list`
lol.spell.list || Spells



// ## Constants

// There are several constants which can be accessed sort of like enums.
// These constants are always based on Riot API and how it defines them (in data).
// Though, these would most likely only come handy in pure JavaScript.
lol.const.ChampionClasses || ChampionClasses
lol.const.MonsterTypes || MonsterTypes
lol.const.DragonTypes || DragonTypes
lol.const.KillTypes || KillTypes
lol.const.BuildingTypes || BuildingTypes
lol.const.TowerTypes || TowerTypes
lol.const.WardTypes || WardTypes
lol.const.QueueTypes || QueueTypes
lol.const.GameModes || GameModes
lol.const.GameTypes || GameTypes
lol.const.RankedTiers || RankedTiers
lol.const.RankedRanks || RankedRanks
lol.const.Locales || Locales
lol.const.Positions || Positions
lol.const.Roles || Roles
lol.const.Lanes || Lanes
lol.const.LaneTypes || LaneTypes
lol.const.TeamIds || TeamIds

// Example properties that can be accessed for each constant.
ChampionClasses['Artillery'] // 'Artillery'
MonsterTypes['BARON_NASHOR'] // 'BARON_NASHOR'
DragonTypes['AIR_DRAGON'] // 'AIR_DRAGON'
KillTypes['KILL_ACE'] // 'KILL_ACE'
BuildingTypes['INHIBITOR_BUILDING'] // 'INHIBITOR_BUILDING'
TowerTypes['BASE_TURRET'] // 'BASE_TURRET'
WardTypes['BLUE_TRINKET'] // 'BLUE_TRINKET'
QueueTypes['RANKED_FLEX_SR'] // 'RANKED_FLEX_SR'
GameModes['ARAM'] // 'ARAM'
GameTypes['CUSTOM_GAME'] // 'CUSTOM_GAME'
RankedTiers['BRONZE'] // 'BRONZE'
RankedRanks['I'] // 'I'
Locales['cs_CZ'] // 'cs_CZ'
Positions['BOTTOM'] // 'BOTTOM'
Roles['CARRY'] // 'CARRY'
Lanes['BOTTOM'] // 'BOTTOM'
LaneTypes['BOT_LANE'] // 'BOT_LANE'
TeamIds[100] // 100

// The combination of a type and type validation function
// is what you'd be looking to utilize in TypeScript.

// Corresponding types
let x: ChampionClass = 'Warden'
let x: MonsterType = 'DRAGON'
let x: DragonType = 'ELDER_DRAGON'
let x: KillType = 'KILL_FIRST_BLOOD'
let x: BuildingType = 'TOWER_BUILDING'
let x: TowerType = 'INNER_TURRET'
let x: WardType = 'CONTROL_WARD'
let x: QueueType = 'RANKED_SOLO_5x5'
let x: GameMode = 'CLASSIC'
let x: GameType = 'MATCHED_GAME'
let x: RankedTier = 'DIAMOND'
let x: RankedRank = 'III'
let x: Locale = 'en_US'
let x: Position = 'UTILITY'
let x: Role = 'SUPPORT'
let x: Lane = 'BOTTOM'
let x: LaneType = 'BOT_LANE'
let x: TeamId = 200

// Corresponding type validation functions
isChampionClass || lol.type.isChampionClass
isMonsterType || lol.type.isMonsterType
isDragonType || lol.type.isDragonType
isKillType || lol.type.isKillType
isBuildingType || lol.type.isBuildingType
isTowerType || lol.type.isTowerType
isWardType || lol.type.isWardType
isQueueType || lol.type.isQueueType
isGameMode || lol.type.isGameMode
isGameType || lol.type.isGameType
isRankedTier || lol.type.isRankedTier
isRankedRank || lol.type.isRankedRank
isLocale || lol.type.isLocale
isPosition || lol.type.isPosition
isRole || lol.type.isRole
isLane || lol.type.isLane
isLaneType || lol.type.isLaneType
isTeamId || lol.type.isTeamId



// ## Other objects: Maps, Queues, Regions etc.

lol.map.get('Rings of Wrath') || lol.map.get(30) || getMap('Rings of Wrath') || getMap(30) // {id: 30, title: 'Rings of Wrath'}

lol.queue.get('5v5 Ranked Solo') || lol.queue.get(420) || getQueue('5v5 Ranked Solo') || getQueue(420) // {id: 420, title: '5v5 Ranked Solo'}

lol.region.get('EUW') || lol.region.get('EUW1') || getRegion('EUW') || getRegion('EUW1') // {region: 'EUW', platform: 'EUW1'}

// They each also have lists
lol.map.list || Maps
lol.queue.list || Queues
lol.region.list || Regions



// ## Enums (library-specific)
// These are the enums that library uses and allows to be used.
lol.enum.ItemSrTypes || ItemSrTypes
lol.enum.StatRuneSlots || StatRuneSlots

ItemSrTypes.STARTER     // 0
ItemSrTypes.BASIC       // 1
ItemSrTypes.EPIC        // 2
ItemSrTypes.LEGENDARY   // 3
ItemSrTypes.TRINKET     // 11
ItemSrTypes.BOOTS       // 12
ItemSrTypes.CONSUMABLE  // 13
ItemSrTypes.MISC        // -1

StatRuneSlots.OFFENSE  // 0
StatRuneSlots.FLEX     // 1
StatRuneSlots.DEFENSE  // 2
