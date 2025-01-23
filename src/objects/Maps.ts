export const Maps = {
  /** Original Summer variant */
  1: {id: 1, title: "Summoner's Rift"},
  /** Original Autumn variant */
  2: {id: 2, title: "Summoner's Rift"},
  /** Tutorial map */
  3:  {id: 3,  title: 'The Proving Grounds'},
  /** Original TT */
  4: {id: 4, title: 'Twisted Treeline'},
  /** Dominion map */
  8: {id: 8, title: 'The Crystal Scar'},
  /** Last TT map */
  10: {id: 10, title: 'Twisted Treeline'},
  /** Current version */
  11: {id: 11, title: "Summoner's Rift"},
  /** ARAM map */
  12: {id: 12, title: 'Howling Abyss'},
  /** Alternate ARAM map */
  14: {id: 14, title: "Butcher's Bridge"},
  /** Dark Star: Singularity map */
  16: {id: 16, title: 'Cosmic Ruins'},
  /** Star Guardian Invasion map */
  18: {id: 18, title: 'Valoran City Park'},
  /** PROJECT: Hunters map */
  19: {id: 19, title: 'Substructure 43'},
  /** Odyssey: Extraction map */
  20: {id: 20, title: 'Crash Site'},
  /** Nexus Blitz map */
  21: {id: 21, title: 'Nexus Blitz'},
  /** Teamfight Tactics map */
  22: {id: 22, title: 'Convergence'},
  /** Arena map */
  30: {id: 30, title: 'Rings of Wrath'},
  /** 2024 Swarm event map */
  33: {id: 33, title: 'Swarm'},
} as const
const failsafeMap = {id: -1, title: ''} as const

export const MapsArr = Object.values(Maps)
export type MapId = typeof MapsArr[number]['id']
export type MapTitle = typeof MapsArr[number]['title']

const mapTitles = {
  /** Original Summer variant */
  "Summoner's Rift (Summer)": 1,
  /** Original Autumn variant */
  "Summoner's Rift (Autumn)": 2,
  /** Tutorial map */
  'The Proving Grounds': 3,
  /** Original TT */
  'Twisted Treeline (Original)': 4,
  /** Dominion map */
  'The Crystal Scar': 8,
  /** Last TT map */
  'Twisted Treeline': 10,
  /** Current version */
  "Summoner's Rift": 11,
  /** ARAM map */
  'Howling Abyss': 12,
  /** Alternate ARAM map */
  "Butcher's Bridge": 14,
  /** Dark Star: Singularity map */
  'Cosmic Ruins': 16,
  /** Star Guardian Invasion map */
  'Valoran City Park': 18,
  /** PROJECT: Hunters map */
  'Substructure 43': 19,
  /** Odyssey: Extraction map */
  'Crash Site': 20,
  /** Nexus Blitz map */
  'Nexus Blitz': 21,
  /** Teamfight Tactics map */
  'Convergence': 22,
  /** Arena map */
  'Rings of Wrath': 30,
  /** 2024 Swarm event map */
  'Swarm': 33,
} as const

export function isMapId(id: number | null | undefined): id is MapId {
  return typeof id == 'number' && id in Maps
}

export function isMapTitle(title: string | null | undefined): title is MapTitle {
  return typeof title == 'string' && title in mapTitles
}

/** Get map by its **id** or **title**. */
export function getMap(id_title: MapId | MapTitle): typeof Maps[keyof typeof Maps] {
  if (typeof id_title == 'number') return Maps[id_title] ?? failsafeMap
  return Maps[mapTitles[id_title]] ?? failsafeMap
}
