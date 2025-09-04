export const Queues = {
  0: {id: 0, title: 'Custom'},
  98: {id: 98, title: '6v6 Hexakill games'},
  100: {id: 100, title: '5v5 ARAM games'},
  400: {id: 400, title: '5v5 Draft Pick'},
  420: {id: 420, title: '5v5 Ranked Solo'},
  430: {id: 430, title: '5v5 Blind Pick'},
  440: {id: 440, title: '5v5 Ranked Flex'},
  450: {id: 450, title: '5v5 ARAM'},
  480: {id: 480, title: 'Swiftplay'},
  490: {id: 490, title: 'Normal (Quickplay)'},
  700: {id: 700, title: 'Clash'},
  720: {id: 720, title: 'ARAM Clash'},
  /** Deprecated in March 2024 in favor of queueId 870 */
  830: {id: 830, title: 'Co-op vs. AI (Intro) (Deprecated)'},
  /** Deprecated in March 2024 in favor of queueId 880 */
  840: {id: 840, title: 'Co-op vs. AI (Beginner) (Deprecated)'},
  /** Deprecated in March 2024 in favor of queueId 890 */
  850: {id: 850, title: 'Co-op vs. AI (Intermediate) (Deprecated)'},
  870: {id: 870, title: 'Co-op vs. AI (Intro)'},
  880: {id: 880, title: 'Co-op vs. AI (Beginner)'},
  890: {id: 890, title: 'Co-op vs. AI (Intermediate)'},
  900: {id: 900, title: 'ARURF'},
  920: {id: 920, title: 'Legend of the Poro King'},
  940: {id: 940, title: 'Nexus Siege'},
  1000: {id: 1000, title: 'PROJECT: Hunters'},
  1010: {id: 1010, title: 'Snow ARURF'},
  1020: {id: 1020, title: 'One for All'},
  1030: {id: 1030, title: 'Odyssey Extraction (Intro)'},
  1040: {id: 1040, title: 'Odyssey Extraction (Cadet)'},
  1050: {id: 1050, title: 'Odyssey Extraction (Crewmember)'},
  1060: {id: 1060, title: 'Odyssey Extraction (Captain)'},
  1070: {id: 1070, title: 'Odyssey Extraction (Onslaught)'},
  1090: {id: 1090, title: 'Teamfight Tactics'},
  1100: {id: 1100, title: 'Teamfight Tactics (Ranked)'},
  1110: {id: 1110, title: 'Teamfight Tactics (Tutorial)'},
  1111: {id: 1111, title: 'Teamfight Tactics (Test)'},
  1210: {id: 1210, title: "Teamfight Tactics (Choncc's Treasure)"},
  1300: {id: 1300, title: 'Nexus Blitz'},
  1400: {id: 1400, title: 'Ultimate Spellbook'},
  1700: {id: 1700, title: 'Arena'},
  1710: {id: 1710, title: 'Arena (Unknown)'},
  /** Swarm Mode 1 player */
  1810: {id: 1810, title: 'Swarm (1 Player)'},
  /** Swarm Mode 2 players */
  1820: {id: 1820, title: 'Swarm (2 Players)'},
  /** Swarm Mode 3 players */
  1830: {id: 1830, title: 'Swarm (3 Players)'},
  /** Swarm Mode 4 players */
  1840: {id: 1840, title: 'Swarm (4 Players)'},
  /** ‘Pick’ URF games */
  1900: {id: 1900, title: 'URF'},
  2000: {id: 2000, title: 'Tutorial 1'},
  2010: {id: 2010, title: 'Tutorial 2'},
  2020: {id: 2020, title: 'Tutorial 3'},
  3140: {id: 3140, title: 'Doom Bots'},
} as const
const failsafeQueue = {id: -1, title: ''} as const

export const QueuesArr = Object.values(Queues)
export type QueueId = typeof QueuesArr[number]['id']
export type QueueTitle = typeof QueuesArr[number]['title']

const queueTitles = {
  'Custom': 0,
  '6v6 Hexakill games': 98,
  '5v5 ARAM games': 100,
  '5v5 Draft Pick': 400,
  '5v5 Ranked Solo': 420,
  '5v5 Blind Pick': 430,
  '5v5 Ranked Flex': 440,
  '5v5 ARAM': 450,
  'Swiftplay': 480,
  'Normal (Quickplay)': 490,
  'Clash': 700,
  'ARAM Clash': 720,
  /** Deprecated in March 2024 in favor of queueId 870 */
  'Co-op vs. AI (Intro) (Deprecated)': 830,
  /** Deprecated in March 2024 in favor of queueId 880 */
  'Co-op vs. AI (Beginner) (Deprecated)': 840,
  /** Deprecated in March 2024 in favor of queueId 890 */
  'Co-op vs. AI (Intermediate) (Deprecated)': 850,
  'Co-op vs. AI (Intro)': 870,
  'Co-op vs. AI (Beginner)': 880,
  'Co-op vs. AI (Intermediate)': 890,
  'ARURF': 900,
  'Legend of the Poro King': 920,
  'Nexus Siege': 940,
  'PROJECT: Hunters': 1000,
  'Snow ARURF': 1010,
  'One for All': 1020,
  'Odyssey Extraction (Intro)': 1030,
  'Odyssey Extraction (Cadet)': 1040,
  'Odyssey Extraction (Crewmember)': 1050,
  'Odyssey Extraction (Captain)': 1060,
  'Odyssey Extraction (Onslaught)': 1070,
  'Teamfight Tactics': 1090,
  'Teamfight Tactics (Ranked)': 1100,
  'Teamfight Tactics (Tutorial)': 1110,
  'Teamfight Tactics (Test)': 1111,
  "Teamfight Tactics (Choncc's Treasure)": 1210,
  'Nexus Blitz': 1300,
  'Ultimate Spellbook': 1400,
  'Arena': 1700,
  'Arena (Unknown)': 1710,
  /** Swarm Mode 1 player */
  'Swarm (1 Player)': 1810,
  /** Swarm Mode 2 players */
  'Swarm (2 Players)': 1820,
  /** Swarm Mode 3 players */
  'Swarm (3 Players)': 1830,
  /** Swarm Mode 4 players */
  'Swarm (4 Players)': 1840,
  /** ‘Pick’ URF games */
  'URF': 1900,
  'Tutorial 1': 2000,
  'Tutorial 2': 2010,
  'Tutorial 3': 2020,
  'Doom Bots': 3140,
} as const

export function isQueueId(id: number | null | undefined): id is QueueId {
  return typeof id == 'number' && id in Queues
}

export function isQueueTitle(title: string | null | undefined): title is QueueTitle {
  return typeof title == 'string' && title in queueTitles
}

/** Get queue by its **id** or **title**. */
export function getQueue(id_title: QueueId | QueueTitle): typeof Queues[keyof typeof Queues] {
  if (typeof id_title == 'number') return Queues[id_title] ?? failsafeQueue
  return Queues[queueTitles[id_title]] ?? failsafeQueue
}
