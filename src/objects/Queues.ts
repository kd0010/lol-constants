export const Queues = {
  0: {id: 0, title: 'Custom'},
  400: {id: 400, title: '5v5 Draft Pick'},
  420: {id: 420, title: '5v5 Ranked Solo'},
  430: {id: 430, title: '5v5 Blind Pick'},
  440: {id: 440, title: '5v5 Ranked Flex'},
  450: {id: 450, title: '5v5 ARAM'},
  700: {id: 700, title: 'Clash'},
  720: {id: 720, title: 'ARAM Clash'},
  830: {id: 830, title: 'Co-op vs. AI: Intro'},
  840: {id: 840, title: 'Co-op vs. AI: Beginner'},
  850: {id: 850, title: 'Co-op vs. AI: Intermediate'},
  900: {id: 900, title: 'ARURF'},
  920: {id: 920, title: 'Legend of the Poro King'},
  1010: {id: 1010, title: 'Snow ARURF'},
  1020: {id: 1020, title: 'One for All'},
  1090: {id: 1090, title: 'Teamfight Tactics'},
  1100: {id: 1100, title: 'Teamfight Tactics (Ranked)'},
  1110: {id: 1110, title: 'Teamfight Tactics (Tutorial)'},
  1111: {id: 1111, title: 'Teamfight Tactics (Test)'},
  1300: {id: 1300, title: 'Nexus Blitz'},
  1400: {id: 1400, title: 'Ultimate Spellbook'},
  1700: {id: 1700, title: 'Arena'},
  /** ‘Pick’ URF games */
  1900: {id: 1900, title: 'URF'},
  2000: {id: 2000, title: 'Tutorial 1'},
  2010: {id: 2010, title: 'Tutorial 2'},
  2020: {id: 2020, title: 'Tutorial 3'},
} as const

export const QueuesArr = Object.values(Queues)
export type QueueId = typeof QueuesArr[number]['id']
export type QueueTitle = typeof QueuesArr[number]['title']

const queueTitles = {
  'Custom': 0,
  '5v5 Draft Pick': 400,
  '5v5 Ranked Solo': 420,
  '5v5 Blind Pick': 430,
  '5v5 Ranked Flex': 440,
  '5v5 ARAM': 450,
  'Clash': 700,
  'ARAM Clash': 720,
  'Co-op vs. AI: Intro': 830,
  'Co-op vs. AI: Beginner': 840,
  'Co-op vs. AI: Intermediate': 850,
  'ARURF': 900,
  'Legend of the Poro King': 920,
  'Snow ARURF': 1010,
  'One for All': 1020,
  'Teamfight Tactics': 1090,
  'Teamfight Tactics (Ranked)': 1100,
  'Teamfight Tactics (Tutorial)': 1110,
  'Teamfight Tactics (Test)': 1111,
  'Nexus Blitz': 1300,
  'Ultimate Spellbook': 1400,
  'Arena': 1700,
  /** ‘Pick’ URF games */
  'URF': 1900,
  'Tutorial 1': 2000,
  'Tutorial 2': 2010,
  'Tutorial 3': 2020,
} as const

export function isQueueId(id: number | null | undefined): id is QueueId {
  return typeof id == 'number' && id in Queues
}

export function isQueueTitle(title: string | null | undefined): title is QueueTitle {
  return typeof title == 'string' && title in queueTitles
}

/** Get queue by its **id** or **title**. */
export function getQueue(id_title: QueueId | QueueTitle): typeof Queues[keyof typeof Queues] {
  if (typeof id_title == 'number') return Queues[id_title]
  return Queues[queueTitles[id_title]]
}
