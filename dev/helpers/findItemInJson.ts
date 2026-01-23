import {Item} from '../generated/Item'
import {out} from './out'

export function findItemInJson(...itemNames: string[]) {
  const foundItems = []

  for (const [itemId, item] of Object.entries(Item.data)) {
    if (itemNames.includes(item.name)) foundItems.push({itemId, ...item})
  }

  out(foundItems)
}
