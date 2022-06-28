import { RuneTreeTypes } from '../../Constants/Runes/RuneTreeTypes'
import { RuneTreeType } from '../../types'

export function isRuneTreeType(type: any): type is RuneTreeType {
  return type in RuneTreeTypes
}
