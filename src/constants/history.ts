export const QueueTypes = {
  'RANKED_SOLO_5x5': 'RANKED_SOLO_5x5',
  'RANKED_FLEX_SR': 'RANKED_FLEX_SR',
  'RANKED_TFT': 'RANKED_TFT',
} as const

export type QueueType = typeof QueueTypes[keyof typeof QueueTypes]

export function isQueueType(type: string | null | undefined): type is QueueType {
  return typeof type == 'string' && type in QueueTypes
}

export const GameModes = {
  'CLASSIC': 'CLASSIC',
  'ARAM': 'ARAM',
  'TUTORIAL': 'TUTORIAL',
  'URF': 'URF',
  'ONEFORALL': 'ONEFORALL',
  'KINGPORO': 'KINGPORO',
  'GAMEMODEX': 'GAMEMODEX',
  'ULTBOOK': 'ULTBOOK',
  'PRACTICETOOL': 'PRACTICETOOL',
} as const

export type GameMode = typeof GameModes[keyof typeof GameModes]

export function isGameMode(mode: string | null | undefined): mode is GameMode {
  return typeof mode == 'string' && mode in GameModes
}

export const GameTypes = {
  'CUSTOM_GAME': 'CUSTOM_GAME',
  'TUTORIAL_GAME': 'TUTORIAL_GAME',
  'MATCHED_GAME': 'MATCHED_GAME',
} as const

export type GameType = typeof GameTypes[keyof typeof GameTypes]

export function isGameType(type: string | null | undefined): type is GameType {
  return typeof type == 'string' && type in GameTypes
}
