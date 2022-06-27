import itemByName from '../assets/generated/itemByName.json'
import { ItemKey, ItemName } from '../types'

export function getItemKeyByName(name: ItemName): ItemKey {
  return itemByName.data[ name ].key as ItemKey
}
