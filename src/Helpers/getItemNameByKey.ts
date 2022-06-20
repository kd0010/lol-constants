import item from '../assets/item.json'
import { ItemKey, ItemName } from '../types'

export function getItemNameByKey(key: ItemKey): ItemName {
  return item.data[ key ].name as ItemName
}
