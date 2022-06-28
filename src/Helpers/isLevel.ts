import { Levels } from '../Constants/Levels'
import { Level } from '../types'

export function isLevel(level: number): level is Level {
  return level in Levels
}
