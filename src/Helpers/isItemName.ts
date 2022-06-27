import { ItemKeys } from '../Constants/ItemKeys'
import { ItemName } from '../types'

export function isItemName(name: string): name is ItemName {
  return name in ItemKeys
}
