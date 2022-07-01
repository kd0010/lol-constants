import { RuneNames, RuneSets, StatRuneNames } from '../Constants/Runes/RuneSets'
import { ChampionIds } from '../Constants/Champions/ChampionIds'
import { ChampionKeys } from '../Constants/Champions/ChampionKeys'
import { ChampionNames } from '../Constants/Champions/ChampionNames'
import { ItemKeys } from '../Constants/Items/ItemKeys'
import { ItemNames } from '../Constants/Items/ItemNames'
import { SpellIds } from '../Constants/Spells/SpellIds'
import { SpellKeys } from '../Constants/Spells/SpellKeys'
import { SpellNames } from '../Constants/Spells/SpellNames'
import { TreeRuneIds } from '../Constants/Runes/TreeRuneIds'
import { TreeRuneNames } from '../Constants/Runes/TreeRuneNames'
import { Positions } from '../Constants/Positions'
import { Lanes } from '../Constants/Lanes'
import { RuneTreeNames } from '../Constants/Runes/RuneTreeNames'
import { RuneTreeTypes } from '../Constants/Runes/RuneTreeTypes'
import { Levels } from '../Constants/Levels'
import { Skills } from '../Constants/Skills'
import { RuneTreeIds } from '../Constants/Runes/RuneTreeIds'
import { RuneIds, RuneSetsByRuneNames, StatRuneIds } from '../Constants/Runes/RuneSetsByRuneNames'

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
export type KeystoneRuneId = keyof typeof RuneSets.KeystoneNames
export type KeystoneRuneName = keyof typeof RuneSetsByRuneNames.KeystoneIds
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
export type PrecisionTreeRuneId = keyof typeof RuneSets.PrimaryRuneTrees.Precision
export type PrecisionTreeRuneName = keyof typeof RuneSetsByRuneNames.PrimaryRuneTrees.Precision
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
export type DominationTreeRuneId = keyof typeof RuneSets.PrimaryRuneTrees.Domination
export type DominationTreeRuneName = keyof typeof RuneSetsByRuneNames.PrimaryRuneTrees.Domination
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
export type SorceryTreeRuneId = keyof typeof RuneSets.PrimaryRuneTrees.Sorcery
export type SorceryTreeRuneName = keyof typeof RuneSetsByRuneNames.PrimaryRuneTrees.Sorcery
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
export type ResolveTreeRuneId = keyof typeof RuneSets.PrimaryRuneTrees.Resolve
export type ResolveTreeRuneName = keyof typeof RuneSetsByRuneNames.PrimaryRuneTrees.Resolve
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
export type InspirationTreeRuneId = keyof typeof RuneSets.PrimaryRuneTrees.Inspiration
export type InspirationTreeRuneName = keyof typeof RuneSetsByRuneNames.PrimaryRuneTrees.Inspiration

export type RuneTreeId = typeof RuneTreeIds[ keyof typeof RuneTreeIds ]
export type RuneTreeName = typeof RuneTreeNames[ keyof typeof RuneTreeNames ]
export type RuneTreeType = keyof typeof RuneTreeTypes
export type StatRunesCategory = 'StatRunes'

export type Position = keyof typeof Positions
export type Lane = keyof typeof Lanes
export type Level = keyof typeof Levels
export type Skill = keyof typeof Skills
export type XP = number
export type Minute = number
