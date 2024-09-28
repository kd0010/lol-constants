export const RankedTiers = {
  'CHALLENGER': 'CHALLENGER',
  'GRANDMASTER': 'GRANDMASTER',
  'MASTER': 'MASTER',
  'DIAMOND': 'DIAMOND',
  'EMERALD': 'EMERALD',
  'PLATINUM': 'PLATINUM',
  'GOLD': 'GOLD',
  'SILVER': 'SILVER',
  'BRONZE': 'BRONZE',
  'IRON': 'IRON',
} as const

export type RankedTier = typeof RankedTiers[keyof typeof RankedTiers]

export function isRankedTier(tier: string | null | undefined): tier is RankedTier {
  return typeof tier == 'string' && tier in RankedTiers
}

export const RankedRanks = {
  'I': 'I',
  'II': 'II',
  'III': 'III',
  'IV': 'IV',
} as const

export type RankedRank = typeof RankedRanks[keyof typeof RankedRanks]

export function isRankedRank(rank: string | null | undefined): rank is RankedRank {
  return typeof rank == 'string' && rank in RankedRanks
}
