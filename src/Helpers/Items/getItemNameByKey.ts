import { ItemNames } from '../../Constants/Items/ItemNames'
import { ItemKey, ItemName } from '../../types'

export function getItemNameByKey(key: ItemKey): ItemName {
  return ItemNames[ key ]
}
