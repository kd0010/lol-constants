import {Item} from '../generated/Item'

export function findItemsInJson(...itemNames: string[]) {
  const foundItems = []

  for (const [itemId, item] of Object.entries(Item.data)) {
    if (itemNames.includes(item.name)) foundItems.push({itemId, ...item})
  }

  return foundItems
}
