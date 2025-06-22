# lol-constants
Provides constants, helper functions, types (and type validator functions) for League of Legends game data, primarily in the context of [Riot API](https://developer.riotgames.com/docs/lol).

In this library, you will find the main advantage to be: the ability to ‘convert’ between **Keys**, **IDs**, and **Names** of various game objects, namely champions, items, runes, and spells. Here's an example:

```typescript
import {lol, ChampionName} from 'lol-constants'

let championName: ChampionName = 'Wukong'

lol.champion.get(championName).id   // 62
lol.champion.get(championName).key  // 'MonkeyKing'
lol.champion.get(championName).name // 'Wukong'

/* Alternatively... */

import {getChampion} from 'lol-constants'

getChampion(championName).id   // 62
getChampion(championName).key  // 'MonkeyKing'
getChampion(championName).name // 'Wukong'
```

That's not all. Such a getter function is also designed to be able to accept not only names, but also keys and ids. Here's how:

```typescript
import {getRune, RuneName, RuneKey, RuneId} from 'lol-constants'

let runeName: RuneName = 'Cosmic Insight'
let runeKey: RuneKey = 'CosmicInsight'
let runeId: RuneId = 8347

getRune(runeName) // ..
getRune(runeKey) // ..
getRune(runeId) // ..
// All return the same rune object: {id: 8347, key: 'CosmicInsight', name: 'Cosmic Insight', ...}
```

This paradigm applies to **4** game areas: champions, items, runes (including stat runes and rune trees), and spells. Functions: `getChampion`, `getItem`, `getRune` (plus `getStatRune` and `getRuneTree`), and `getSpell`. Plus a few other areas.

Constants
---
Whilst working with the Riot API, you will encounter many fields which have an exact type of value. As the library name suggests, these constants are a core part of it. So are their types and type validation functions which arise from each constant, like so:

```typescript
const DragonTypes = {...}
type DragonType // "EARTH_DRAGON" | "CHEMTECH_DRAGON" | "AIR_DRAGON" | "HEXTECH_DRAGON" | "WATER_DRAGON" | "FIRE_DRAGON" | "ELDER_DRAGON"
function isDragonType(type: string): type is DragonType {...}
```
See [actual code behind this constant](./src/constants/events.ts)\
See [type validator usage example](./examples/type-validator-fn-example.ts)

**Armed with these tools, you may effectively and fearlessly use types in your interfaces or elsewhere.**



# `lol` object vs. shorthand functions
In part, `lol` is meant to be an introductory entry point object for the library. You can explore all the different amenities this library provides without a hassle of looking for them outside of your code editor. When you have discovered a certain method, such as `lol.region.get`, you may start using its shorthand function, in this case `getRegion`. Additionally, you may look into the [examples file](./examples/examples-with-lol.ts) for all equivalents laid out.

**Anything that you may find in the `lol` object can also be imported as a standalone constant, enum, or function.**



# Key, ID, Name
While the various JSONs provided by [DataDragon](https://developer.riotgames.com/docs/lol#data-dragon), such as [`champion.json`](http://ddragon.leagueoflegends.com/cdn/14.19.1/data/en_US/champion.json) or [`runesReforged.json`](http://ddragon.leagueoflegends.com/cdn/14.19.1/data/en_US/runesReforged.json) and so on, organize keys, ids, and names haphazardly, `lol-constants` offers a simpler approach that relies on the following principles:
|     |     |
| --- | --- |
| **ID** | Numerical identifier *(primary entry point)* |
| **Key** | Alias or reference *(secondary entry point)* |
| **Name** | Display name of artifact *(user-friendly)* |

Examples
---

| Category | ID | Key | Name |                                   `lol` getter | standalone |
| ---:     | :---: | :---: | :---: |                            :--- | :--- |
| Champion | `62` | `'MonkeyKing'` | `'Wukong'` |                `lol.champion.get` | `getChampion` |
| Item     | `1038` | n/a | `'B. F. Sword'` |                      `lol.item.get` | `getItem` |
| Rune      | `8347` | `'CosmicInsight'` | `'Cosmic Insight'` |  `lol.rune.get` | `getRune` |
| Spell    | `4` | `'SummonerFlash'` | `'Flash'` |               `lol.spell.get` | `getSpell` |
| ———— |  |  |  |
| Stat Rune | `5008` | n/a | `'Adaptive Force'` |                  `lol.rune.stat.get` | `getStatRune` |
| Rune Tree | `8000` | `'Precision'` | `'Precision'` |           `lol.rune.tree.get` | `getRuneTree` |



# Types

If you're working with TypeScript, you're gonna want types. Here are some useful types that are exported from the library:

```typescript
import {
  // ### Basic constants
  MonsterType,    // "HORDE" | "DRAGON" | "RIFTHERALD" | "BARON_NASHOR"
  DragonType,     // "EARTH_DRAGON" | "CHEMTECH_DRAGON" | "AIR_DRAGON" | ...
  KillType,       // "KILL_FIRST_BLOOD" | "KILL_MULTI" | "KILL_ACE"
  BuildingType,   // "TOWER_BUILDING" | "INHIBITOR_BUILDING"
  TowerType,      // "OUTER_TURRET" | "INNER_TURRET" | "BASE_TURRET" | "NEXUS_TURRET"
  RankedTier,     // "CHALLENGER" | "GRANDMASTER" | "MASTER" | "DIAMOND" | ...
  RankedRank,     // "I" | "II" | "III" | "IV"
  Locale,         // "cs_CZ" | "el_GR" | "pl_PL" | "ro_RO" | "en_GB" | ...
  Position,       // "TOP" | "JUNGLE" | "MIDDLE" | "BOTTOM" | "UTILITY"
  // etc.
  // ### Maps, Queues, Regions
  QueueId,        // 0 | 420 | 2010 | 2020 | 400 | 430 | 440 | 450 | 700 | ...
  Platform,       // "BR1" | "EUN1" | "EUW1" | "JP1" | "KR" | "LA1" | "LA2" | ...
  Region,         // "BR" | "EUNE" | "EUW" | "JP" | "KR" | "LAN" | "LAS" | ...
  // ### Champions, Items, Runes, Spells
  ChampionId,     // 1 | 2 | 3 | 11 | 12 | 13 | 4 | 5 | 6 | 7 | 8 | 9 | ...
  ChampionName,   // "Annie" | "Olaf" | "Galio" | "Twisted Fate" | "Xin Zhao" | ...
  ItemId,         // 1001 | 1004 | 1006 | 1011 | 1018 | 1026 | 1027 | 1028 | ...
  ItemName,       // "Boots" | "Faerie Charm" | "Rejuvenation Bead" | "Giant's Belt" | ...
  RuneId,         // 8005 | 8021 | 8010 | 8009 | 9101 | 9111 | 8014 | 8017 | ...
  RuneName,       // "Press the Attack" | "Presence of Mind" | "Conqueror" | ...
  SpellId,        // 1 | 3 | 11 | 12 | 13 | 4 | 6 | 7 | 14 | 21 | 30 | 31 | ...
  SpellName,      // "Cleanse" | "Exhaust" | "Flash" | "Ghost" | "Heal" | ...
} from 'lol-constants'
```

More types can be found here: [examples/](./examples/)
