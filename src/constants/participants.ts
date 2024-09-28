export const Positions = {
  'TOP': 'TOP',
  'JUNGLE': 'JUNGLE',
  'MIDDLE': 'MIDDLE',
  'BOTTOM': 'BOTTOM',
  'UTILITY': 'UTILITY',
} as const

export type Position = typeof Positions[keyof typeof Positions]

export function isPosition(position: string | null | undefined): position is Position {
  return typeof position == 'string' && position in Positions
}

export const Roles = {
  'NONE': 'NONE',
  'SOLO': 'SOLO',
  'CARRY': 'CARRY',
  'SUPPORT': 'SUPPORT',
} as const

export type Role = typeof Roles[keyof typeof Roles]

export function isRole(role: string | null | undefined): role is Role {
  return typeof role == 'string' && role in Roles
}

export const Lanes = {
  'TOP': 'TOP',
  'JUNGLE': 'JUNGLE',
  'MIDDLE': 'MIDDLE',
  'BOTTOM': 'BOTTOM',
} as const

export type Lane = typeof Lanes[keyof typeof Lanes]

export function isLane(lane: string | null | undefined): lane is Lane {
  return typeof lane == 'string' && lane in Lanes
}

export const LaneTypes = {
  'TOP_LANE': 'TOP_LANE',
  'MID_LANE': 'MID_LANE',
  'BOT_LANE': 'BOT_LANE',
} as const

export type LaneType = typeof LaneTypes[keyof typeof LaneTypes]

export function isLaneType(type: string | null | undefined): type is LaneType {
  return typeof type == 'string' && type in LaneTypes
}

export const TeamIds = {
  100: 100,
  200: 200,
} as const

export type TeamId = typeof TeamIds[keyof typeof TeamIds]

export function isTeamId(id: number | null | undefined): id is TeamId {
  return typeof id == 'number' && id in TeamIds
}
