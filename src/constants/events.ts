export const MonsterTypes = {
  'HORDE': 'HORDE',
  'DRAGON': 'DRAGON',
  'RIFTHERALD': 'RIFTHERALD',
  'BARON_NASHOR': 'BARON_NASHOR',
} as const

export type MonsterType = typeof MonsterTypes[keyof typeof MonsterTypes]

export function isMonsterType(type: string | null | undefined): type is MonsterType {
  return typeof type == 'string' && type in MonsterTypes
}

export const DragonTypes = {
  'EARTH_DRAGON': 'EARTH_DRAGON',
  'CHEMTECH_DRAGON': 'CHEMTECH_DRAGON',
  'AIR_DRAGON': 'AIR_DRAGON',
  'HEXTECH_DRAGON': 'HEXTECH_DRAGON',
  'WATER_DRAGON': 'WATER_DRAGON',
  'FIRE_DRAGON': 'FIRE_DRAGON',
  'ELDER_DRAGON': 'ELDER_DRAGON',
} as const

export type DragonType = typeof DragonTypes[keyof typeof DragonTypes]

export function isDragonType(type: string | null | undefined): type is DragonType {
  return typeof type == 'string' && type in DragonTypes
}

export const KillTypes = {
  'KILL_FIRST_BLOOD': 'KILL_FIRST_BLOOD',
  'KILL_MULTI': 'KILL_MULTI',
  'KILL_ACE': 'KILL_ACE',
} as const

export type KillType = typeof KillTypes[keyof typeof KillTypes]

export function isKillType(type: string | null | undefined): type is KillType {
  return typeof type == 'string' && type in KillTypes
}

export const BuildingTypes = {
  'TOWER_BUILDING': 'TOWER_BUILDING',
  'INHIBITOR_BUILDING': 'INHIBITOR_BUILDING',
} as const

export type BuildingType = typeof BuildingTypes[keyof typeof BuildingTypes]

export function isBuildingType(type: string | null | undefined): type is BuildingType {
  return typeof type == 'string' && type in BuildingTypes
}

export const TowerTypes = {
  'OUTER_TURRET': 'OUTER_TURRET',
  'INNER_TURRET': 'INNER_TURRET',
  'BASE_TURRET': 'BASE_TURRET',
  'NEXUS_TURRET': 'NEXUS_TURRET',
} as const

export type TowerType = typeof TowerTypes[keyof typeof TowerTypes]

export function isTowerType(type: string | null | undefined): type is TowerType {
  return typeof type == 'string' && type in TowerTypes
}

export const WardTypes = {
  'UNDEFINED': 'UNDEFINED',
  'YELLOW_TRINKET': 'YELLOW_TRINKET',
  'CONTROL_WARD': 'CONTROL_WARD',
  'SIGHT_WARD': 'SIGHT_WARD',
  'BLUE_TRINKET': 'BLUE_TRINKET',
} as const

export type WardType = typeof WardTypes[keyof typeof WardTypes]

export function isWardType(type: string | null | undefined): type is WardType {
  return typeof type == 'string' && type in WardTypes
}
