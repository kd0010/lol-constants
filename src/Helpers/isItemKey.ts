import { ItemNames } from '../Constants/ItemNames'
import { ItemKey } from '../types'

export function isItemKey(key: string): key is ItemKey {
  return key in ItemNames
}
