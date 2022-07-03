import { ItemKeys } from '../../Constants/Items/ItemKeys'
import { ItemName } from '../../types'

export function isItemName(name: any): name is ItemName {
  return name in ItemKeys
}
