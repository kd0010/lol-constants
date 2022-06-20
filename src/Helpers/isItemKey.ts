import { ItemKeys } from '../Constants/ItemKeys'
import { ItemKey } from '../types'

export function isItemKey(key: any): key is ItemKey {
  if (ItemKeys.includes(key)) return true
  return false
}
