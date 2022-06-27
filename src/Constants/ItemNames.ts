import itemByName from '../assets/generated/itemByName.json'
import { ItemName } from '../types'

export const ItemNames: ItemName[] = (
  Object.keys(itemByName.data).map(name => name as keyof typeof itemByName.data)
)
