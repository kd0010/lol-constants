import { ItemNames } from '../Constants/ItemNames'
import { ItemKey, ItemName } from '../types'

export function getItemNameByKey(key: ItemKey): ItemName {
  return ItemNames[ key ]
}
