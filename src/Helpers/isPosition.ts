import { Positions } from '../Constants/Positions'
import { Position } from '../types'

export function isPosition(position: string): position is Position {
  return position in Positions
}
