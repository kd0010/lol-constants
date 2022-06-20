import { ItemNames } from '../Constants/ItemNames'
import { ItemName } from '../types'

export function isItemName(name: any): name is ItemName {
  if (ItemNames.includes(name)) return true
  return false
}
