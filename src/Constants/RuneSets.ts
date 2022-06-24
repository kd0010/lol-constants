const PrimaryTrees = {
  /**
   * There are 13 Precision Runes in the game.
   */
  'Precision': [
    '8005',
    '8008',
    '8021',
    '8010',
    '9101',
    '9111',
    '8009',
    '9104',
    '9105',
    '9103',
    '8014',
    '8017',
    '8299',
  ],
  /**
   * There are 13 Domination Runes in the game.
   */
  'Domination': [
    '8112',
    '8124',
    '8128',
    '9923',
    '8126',
    '8139',
    '8143',
    '8136',
    '8138',
    '8135',
    '8134',
    '8105',
    '8106',
  ],
  /**
   * There are 12 Sorcery Runes in the game.
   */
  'Sorcery': [
    '8214',
    '8229',
    '8230',
    '8224',
    '8226',
    '8275',
    '8210',
    '8234',
    '8233',
    '8237',
    '8232',
    '8236',
  ],
  /**
   * There are 11 Resolve Runes in the game.
   */
  'Resolve': [
    '8437',
    '8439',
    '8465',
    '8446',
    '8463',
    '8401',
    '8429',
    '8444',
    '8473',
    '8451',
    '8453',
    '8242',
  ],
  /**
   * There are 12 Inspiration Runes in the game.
   */
  'Inspiration': [
    '8351',
    '8360',
    '8369',
    '8306',
    '8304',
    '8313',
    '8321',
    '8316',
    '8345',
    '8347',
    '8410',
    '8352',
  ],
} as const

const SecondaryTrees = {
  'Precision': [
    '9101',
    '9111',
    '8009',
    '9104',
    '9105',
    '9103',
    '8014',
    '8017',
    '8299',
  ],
  'Domination': [
    '8126',
    '8139',
    '8143',
    '8136',
    '8138',
    '8135',
    '8134',
    '8105',
    '8106',
  ],
  'Sorcery': [
    '8224',
    '8226',
    '8275',
    '8210',
    '8234',
    '8233',
    '8237',
    '8232',
    '8236',
  ],
  'Resolve': [
    '8446',
    '8463',
    '8401',
    '8429',
    '8444',
    '8473',
    '8451',
    '8453',
    '8242',
  ],
  'Inspiration': [
    '8306',
    '8304',
    '8313',
    '8321',
    '8316',
    '8345',
    '8347',
    '8410',
    '8352',
  ],
} as const

/**
 * There are 17 Keystone Runes in the game.
 */
export const Keystones = [
  // Precision
  '8005',
  '8008',
  '8021',
  '8010',
  // Domination
  '8112',
  '8124',
  '8128',
  '9923',
  // Sorcery
  '8214',
  '8229',
  '8230',
  // Resolve
  '8437',
  '8439',
  '8465',
  // Inspiration
  '8351',
  '8360',
  '8369',
] as const

/**
 * There are 9 Stat Runes in the game.
 */
const StatRunes = [
  '5001',
  '5002',
  '5002f',
  '5003',
  '5003f',
  '5005',
  '5007',
  '5008',
  '5008f',
] as const

const All = [
  ...PrimaryTrees.Precision,
  ...PrimaryTrees.Domination,
  ...PrimaryTrees.Sorcery,
  ...PrimaryTrees.Resolve,
  ...PrimaryTrees.Inspiration,
  ...StatRunes,
] as const

/**
 * Contains all Rune IDs
 * that are known to man in the game of League of Legends.
 * Sorted by various useful categories.
 */
export const RuneSets = {
  PrimaryTrees,
  SecondaryTrees,
  Keystones,
  StatRunes,
  All,
} as const
