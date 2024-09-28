export const ChampionClasses = {
  // # Controller
  'Enchanter': 'Enchanter',
  'Catcher': 'Catcher',
  // # Fighter
  'Juggernaut': 'Juggernaut',
  'Diver': 'Diver',
  // # Mage
  'Burst': 'Burst',
  'Battlemage': 'Battlemage',
  'Artillery': 'Artillery',
  // # Marskman
  'Marksman': 'Marksman',
  // # Slayer
  'Assassin': 'Assassin',
  'Skirmisher': 'Skirmisher',
  // # Tank
  'Vanguard': 'Vanguard',
  'Warden': 'Warden',
  // # Specialist
  'Specialist': 'Specialist',
} as const

export type ChampionClass = typeof ChampionClasses[keyof typeof ChampionClasses]

export function isChampionClass(title: string | null | undefined): title is ChampionClass {
  return typeof title == 'string' && title in ChampionClasses
}
