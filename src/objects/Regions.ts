export const Regions = {
  'BR': {region: 'BR', platform: 'BR1'},
  'EUNE': {region: 'EUNE', platform: 'EUN1'},
  'EUW': {region: 'EUW', platform: 'EUW1'},
  'JP': {region: 'JP', platform: 'JP1'},
  'KR': {region: 'KR', platform: 'KR'},
  'LAN': {region: 'LAN', platform: 'LA1'},
  'LAS': {region: 'LAS', platform: 'LA2'},
  'NA': {region: 'NA', platform: 'NA1'},
  'OCE': {region: 'OCE', platform: 'OC1'},
  'TR': {region: 'TR', platform: 'TR1'},
  'RU': {region: 'RU', platform: 'RU'},
  'PH': {region: 'PH', platform: 'PH2'},
  'SG': {region: 'SG', platform: 'SG2'},
  'TH': {region: 'TH', platform: 'TH2'},
  'TW': {region: 'TW', platform: 'TW2'},
  'VN': {region: 'VN', platform: 'VN2'},
  'MENA': {region: 'MENA', platform: 'ME1'},
  'PBE': {region: 'PBE', platform: 'PBE1'},
} as const
const failsafeRegion = {region: '', platform: ''} as const

export const RegionsArr = Object.values(Regions)
export type Region = typeof RegionsArr[number]['region']
export type Platform = typeof RegionsArr[number]['platform']

const platforms = {
  'BR1': 'BR',
  'EUN1': 'EUNE',
  'EUW1': 'EUW',
  'JP1': 'JP',
  'KR': 'KR',
  'LA1': 'LAN',
  'LA2': 'LAS',
  'NA1': 'NA',
  'OC1': 'OCE',
  'TR1': 'TR',
  'RU': 'RU',
  'PH2': 'PH',
  'SG2': 'SG',
  'TH2': 'TH',
  'TW2': 'TW',
  'VN2': 'VN',
  'ME1': 'MENA',
  'PBE1': 'PBE',
} as const

export function isRegion(region: string | null | undefined): region is Region {
  return typeof region == 'string' && region in Regions
}

export function isPlatform(platform: string | null | undefined): platform is Platform {
  return typeof platform == 'string' && platform in platforms
}

/**
 * Get region by its region notation (e.g. `'EUW'`)
 * or by its platform notation (e.g. `'EUW1'`).
 * Convert between the two.
 */
export function getRegion(region_platform: Region | Platform): typeof Regions[keyof typeof Regions] {
  if (isRegion(region_platform)) return Regions[region_platform]
  return Regions[platforms[region_platform]] ?? failsafeRegion
}
