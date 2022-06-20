import item from '../assets/item.json'
import { ItemKey } from '../types'

export const ItemKeys: ItemKey[] = (
  Object.keys(item.data).map(key => key as keyof typeof item.data)
)
