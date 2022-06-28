import { Lanes } from '../Constants/Lanes'
import { Lane } from '../types'

export function isLane(lane: any): lane is Lane {
  return lane in Lanes
}
