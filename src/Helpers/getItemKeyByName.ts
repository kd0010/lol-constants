import { ItemKeys } from '../Constants/ItemKeys'
import { ItemKey, ItemName } from '../types'

export function getItemKeyByName(name: ItemName): ItemKey {
  return ItemKeys[ name ]
}
