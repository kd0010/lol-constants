import {Patch} from './Patch'
import {ChampionClasses, isChampionClass} from './constants/custom'
import {
  BuildingTypes,
  DragonTypes,
  isBuildingType,
  isDragonType,
  isKillType,
  isMonsterType,
  isTowerType,
  isWardType,
  KillTypes,
  MonsterTypes,
  TowerTypes,
  WardTypes,
} from './constants/events'
import {
  GameModes,
  GameTypes,
  isGameMode,
  isGameType,
  isQueueType,
  QueueTypes,
} from './constants/history'
import {isRankedRank, isRankedTier, RankedRanks, RankedTiers} from './constants/leagues'
import {isLocale, Locales} from './constants/locales'
import {
  isLane,
  isLaneType,
  isPosition,
  isRole,
  isTeamId,
  Lanes,
  LaneTypes,
  Positions,
  Roles,
  TeamIds,
} from './constants/participants'
import {ItemSrTypes} from './enums/ItemSrTypes'
import {StatRuneSlots} from './enums/StatRuneSlots'
import {
  getChampion,
  isChampionId,
  isChampionKey,
  isChampionName,
} from './helpers/champion'
import {
  getItem,
  isBasicItem,
  isBootsItem,
  isConsumableItem,
  isEpicItem,
  isItemAvailableOnMap,
  isItemId,
  isItemName,
  isLegendaryItem,
  isStarterItem,
  isTrinketItem,
} from './helpers/item'
import {makeRiotId, splitRiotId, validateRiotId} from './helpers/riotId'
import {
  getRune,
  getRuneTree,
  getStatRune,
  isRuneId,
  isRuneKey,
  isRuneName,
  isRuneTreeId,
  isRuneTreeKey,
  isRuneTreeName,
  isStatRuneId,
  isStatRuneName,
} from './helpers/rune'
import {
  getSpell,
  isSpellId,
  isSpellKey,
  isSpellName,
} from './helpers/spell'
import {getMap, isMapId, isMapTitle, MapsArr} from './objects/Maps'
import {
  getQueue,
  isQueueId,
  isQueueTitle,
  QueuesArr,
} from './objects/Queues'
import {
  getRegion,
  isPlatform,
  isRegion,
  RegionsArr,
} from './objects/Regions'
import {ChampionsArr} from './objects/generated/Champions'
import {ItemsArr} from './objects/generated/Items'
import {RunesArr, RuneTreesArr, StatRunesArr} from './objects/generated/Runes'
import {SpellsArr} from './objects/generated/Spells'

/**
 * # `lol-constants`
 * + [README](https://github.com/kd0010/lol-constants#readme)
 * + [`lol` object and shorthand function examples](https://github.com/kd0010/lol-constants/blob/main/examples/examples-with-lol.ts)
 */
export const lol = {
  /**
   * ## Current patch version
   * What patch the library is currently on. *(read-only)*
   */
  version: Patch.version,
  /**
   * ## Constants
   * Riot API defined constants.
   */
  const: {
    ChampionClasses,
    MonsterTypes,
    DragonTypes,
    KillTypes,
    BuildingTypes,
    TowerTypes,
    WardTypes,
    QueueTypes,
    GameModes,
    GameTypes,
    RankedTiers,
    RankedRanks,
    Locales,
    Positions,
    Roles,
    Lanes,
    LaneTypes,
    TeamIds,
  },
  /**
   * ## Enums
   * Library specific enums.
   */
  enum: {
    /**
     * ### Item (Summoner's Rift) Types
     * Enumerates `lol-constants`-specific item category types,
     * tailored for Summoner's Rift.
     */
    ItemSrTypes: ItemSrTypes,
    /**
     * ### Stat Rune Slots
     * Enumerates the three types of stat runes.
     * Generally, should be used together with `lol.rune.stat.get`/`getStatRune`.
     */
    StatRuneSlots: StatRuneSlots,
  },
  /** ## Champions */
  champion: {
    /** Array of champion objects, containing information about all champions. */
    list: ChampionsArr,
    get: getChampion,
  },
  /** ## Items */
  item: {
    /** Array of item objects, containing information about all items. */
    list: ItemsArr,
    get: getItem,
    isStarter: isStarterItem,
    isBasic: isBasicItem,
    isEpic: isEpicItem,
    isLegendary: isLegendaryItem,
    isTrinket: isTrinketItem,
    isBoots: isBootsItem,
    isConsumable: isConsumableItem,
    isAvailable: isItemAvailableOnMap,
  },
  /** ## Runes, Stat Runes, and Rune Trees */
  rune: {
    /** Array of rune objects, containing information about runes (excl. stat runes). */
    list: RunesArr,
    get: getRune,
    stat: {
      /** Array of stat rune objects, containing information about little stat runes. */
      list: StatRunesArr,
      get: getStatRune,
    },
    tree: {
      /** Array of rune tree objects, containing information about rune trees. */
      list: RuneTreesArr,
      get: getRuneTree,
    },
  },
  /** ## Summoner Spells */
  spell: {
    /** Array of spell objects, containing information about summoner spells. */
    list: SpellsArr,
    get: getSpell,
  },
  /** ## Maps */
  map: {
    /** Array of map objects, containing information about maps. */
    list: MapsArr,
    get: getMap,
  },
  /** ## Queues */
  queue: {
    /** Array of queue objects, containing information about queues. */
    list: QueuesArr,
    get: getQueue,
  },
  /** ## Regions, Platforms, Locales, and Riot ID */
  region: {
    /** Array of region objects, containing information about regions/platforms. */
    list: RegionsArr,
    get: getRegion,
    /**
     * ### Riot ID
     * Helper functions for processing Riot ID.
     */
    riotId: {
      make: makeRiotId,
      split: splitRiotId,
      validate: validateRiotId,
    },
  },
  /** ## Type validators */
  type: {
    isChampionClass,
    isKillType,
    isMapId,
    isMapTitle,
    isDragonType,
    isMonsterType,
    isLane,
    isLaneType,
    isPosition,
    isRole,
    isTeamId,
    isGameMode,
    isGameType,
    isQueueId,
    isQueueTitle,
    isQueueType,
    isRankedRank,
    isRankedTier,
    isLocale,
    isPlatform,
    isRegion,
    isBuildingType,
    isTowerType,
    isWardType,
    isChampionId,
    isChampionKey,
    isChampionName,
    isItemId,
    isItemName,
    isRuneId,
    isRuneKey,
    isRuneName,
    isStatRuneId,
    isStatRuneName,
    isRuneTreeId,
    isRuneTreeKey,
    isRuneTreeName,
    isSpellId,
    isSpellKey,
    isSpellName,
  },
}
