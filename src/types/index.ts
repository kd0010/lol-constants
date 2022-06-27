import { RuneSets } from '../Constants/RuneSets'
import { ChampionIds } from '../Constants/ChampionIds'
import { ChampionKeys } from '../Constants/ChampionKeys'
import { ChampionNames } from '../Constants/ChampionNames'
import { ItemKeys } from '../Constants/ItemKeys'
import { ItemNames } from '../Constants/ItemNames'
import { SpellIds } from '../Constants/SpellIds'
import { SpellKeys } from '../Constants/SpellKeys'
import { SpellNames } from '../Constants/SpellNames'
import { RuneIds } from '../Constants/RuneIds'
import { RuneNames } from '../Constants/RuneNames'
import { StatRuneIds } from '../Constants/StatRuneIds'
import { StatRuneNames } from '../Constants/StatRuneNames'
import { TreeRuneIds } from '../Constants/TreeRuneIds'
import { TreeRuneNames } from '../Constants/TreeRuneNames'

export type ChampionId = typeof ChampionIds[ keyof typeof ChampionIds ]
export type ChampionKey = typeof ChampionKeys[ keyof typeof ChampionKeys ]
export type ChampionName = typeof ChampionNames[ keyof typeof ChampionNames ]
export type ItemKey = typeof ItemKeys[ keyof typeof ItemKeys ]
export type ItemName = typeof ItemNames[ keyof typeof ItemNames ]
export type SpellId = typeof SpellIds[ keyof typeof SpellIds ]
export type SpellKey = typeof SpellKeys[ keyof typeof SpellKeys ]
export type SpellName = typeof SpellNames[ keyof typeof SpellNames ]

/**
 * There are 3 main Rune ID types:
 * -  `RuneId` (all),
 * -  `TreeRuneId` (all but stat runes),
 * -  `StatRuneId` (only stat runes).
 * 
 * There are 6 more specific Rune ID types as well:
 * -  `KeystoneRuneId`,
 * -  `PrecisionTreeRuneId`,
 * -  `DominationTreeRuneId`,
 * -  `SorceryTreeRuneId`,
 * -  `ResolveTreeRuneId`,
 * -  `InspirationTreeRuneId`,
 */
export type RuneId = typeof RuneIds[ keyof typeof RuneIds ]
export type RuneName = typeof RuneNames[ keyof typeof RuneNames ]
/**
 * There are 3 main Rune ID types:
 * -  `RuneId` (all),
 * -  `TreeRuneId` (all but stat runes),
 * -  `StatRuneId` (only stat runes).
 * 
 * There are 6 more specific Rune ID types as well:
 * -  `KeystoneRuneId`,
 * -  `PrecisionTreeRuneId`,
 * -  `DominationTreeRuneId`,
 * -  `SorceryTreeRuneId`,
 * -  `ResolveTreeRuneId`,
 * -  `InspirationTreeRuneId`,
 */
export type TreeRuneId = typeof TreeRuneIds[ keyof typeof TreeRuneIds ]
export type TreeRuneName = typeof TreeRuneNames[ keyof typeof TreeRuneNames ]
/**
 * There are 3 main Rune ID types:
 * -  `RuneId` (all),
 * -  `TreeRuneId` (all but stat runes),
 * -  `StatRuneId` (only stat runes).
 * 
 * There are 6 more specific Rune ID types as well:
 * -  `KeystoneRuneId`,
 * -  `PrecisionTreeRuneId`,
 * -  `DominationTreeRuneId`,
 * -  `SorceryTreeRuneId`,
 * -  `ResolveTreeRuneId`,
 * -  `InspirationTreeRuneId`,
 */
export type StatRuneId = typeof StatRuneIds[ keyof typeof StatRuneIds ]
export type StatRuneName = typeof StatRuneNames[ keyof typeof StatRuneNames ]
/**
 * There are 3 main Rune ID types:
 * -  `RuneId` (all),
 * -  `TreeRuneId` (all but stat runes),
 * -  `StatRuneId` (only stat runes).
 * 
 * There are 6 more specific Rune ID types as well:
 * -  `KeystoneRuneId`,
 * -  `PrecisionTreeRuneId`,
 * -  `DominationTreeRuneId`,
 * -  `SorceryTreeRuneId`,
 * -  `ResolveTreeRuneId`,
 * -  `InspirationTreeRuneId`,
 */
export type KeystoneRuneId = Extract<typeof RuneSets.Keystones[ keyof typeof RuneSets.Keystones ], string>
/**
 * There are 3 main Rune ID types:
 * -  `RuneId` (all),
 * -  `TreeRuneId` (all but stat runes),
 * -  `StatRuneId` (only stat runes).
 * 
 * There are 6 more specific Rune ID types as well:
 * -  `KeystoneRuneId`,
 * -  `PrecisionTreeRuneId`,
 * -  `DominationTreeRuneId`,
 * -  `SorceryTreeRuneId`,
 * -  `ResolveTreeRuneId`,
 * -  `InspirationTreeRuneId`,
 */
export type PrecisionTreeRuneId = Extract<typeof RuneSets.PrimaryTrees.Precision[ keyof typeof RuneSets.PrimaryTrees.Precision ], string>
/**
 * There are 3 main Rune ID types:
 * -  `RuneId` (all),
 * -  `TreeRuneId` (all but stat runes),
 * -  `StatRuneId` (only stat runes).
 * 
 * There are 6 more specific Rune ID types as well:
 * -  `KeystoneRuneId`,
 * -  `PrecisionTreeRuneId`,
 * -  `DominationTreeRuneId`,
 * -  `SorceryTreeRuneId`,
 * -  `ResolveTreeRuneId`,
 * -  `InspirationTreeRuneId`,
 */
export type DominationTreeRuneId = Extract<typeof RuneSets.PrimaryTrees.Domination[ keyof typeof RuneSets.PrimaryTrees.Domination ], string>
/**
 * There are 3 main Rune ID types:
 * -  `RuneId` (all),
 * -  `TreeRuneId` (all but stat runes),
 * -  `StatRuneId` (only stat runes).
 * 
 * There are 6 more specific Rune ID types as well:
 * -  `KeystoneRuneId`,
 * -  `PrecisionTreeRuneId`,
 * -  `DominationTreeRuneId`,
 * -  `SorceryTreeRuneId`,
 * -  `ResolveTreeRuneId`,
 * -  `InspirationTreeRuneId`,
 */
export type SorceryTreeRuneId = Extract<typeof RuneSets.PrimaryTrees.Sorcery[ keyof typeof RuneSets.PrimaryTrees.Sorcery ], string>
/**
 * There are 3 main Rune ID types:
 * -  `RuneId` (all),
 * -  `TreeRuneId` (all but stat runes),
 * -  `StatRuneId` (only stat runes).
 * 
 * There are 6 more specific Rune ID types as well:
 * -  `KeystoneRuneId`,
 * -  `PrecisionTreeRuneId`,
 * -  `DominationTreeRuneId`,
 * -  `SorceryTreeRuneId`,
 * -  `ResolveTreeRuneId`,
 * -  `InspirationTreeRuneId`,
 */
export type ResolveTreeRuneId = Extract<typeof RuneSets.PrimaryTrees.Resolve[ keyof typeof RuneSets.PrimaryTrees.Resolve ], string>
/**
 * There are 3 main Rune ID types:
 * -  `RuneId` (all),
 * -  `TreeRuneId` (all but stat runes),
 * -  `StatRuneId` (only stat runes).
 * 
 * There are 6 more specific Rune ID types as well:
 * -  `KeystoneRuneId`,
 * -  `PrecisionTreeRuneId`,
 * -  `DominationTreeRuneId`,
 * -  `SorceryTreeRuneId`,
 * -  `ResolveTreeRuneId`,
 * -  `InspirationTreeRuneId`,
 */
export type InspirationTreeRuneId = Extract<typeof RuneSets.PrimaryTrees.Inspiration[ keyof typeof RuneSets.PrimaryTrees.Inspiration ], string>

export type XP = number
export type Minute = number

export type Position =
  | 'TOP'
  | 'JUNGLE'
  | 'MIDDLE'
  | 'BOTTOM'
  | 'UTILITY'

export type Lane =
  | 'TOP'
  | 'JUNGLE'
  | 'MIDDLE'
  | 'BOTTOM'

export type RuneTreeName =
  | 'Precision'
  | 'Domination'
  | 'Sorcery'
  | 'Resolve'
  | 'Inspiration'

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
