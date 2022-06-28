import { ItemNames } from '../../Constants/Items/ItemNames'
import { ItemKey } from '../../types'

export function isItemKey(key: string): key is ItemKey {
  return key in ItemNames
}
