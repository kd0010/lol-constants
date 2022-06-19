import fs from 'fs'
import item from '../assets/item.json'

export function generateItemsByName(): void {
  const itemsByKey: {
    data: {
      [k: string]: any
    }
    version: string
  } = {
    data: {},
    version: '',
  }

  // Add all items' data to each corresponding key value
  let itemKey: keyof typeof item.data
  for (itemKey in item.data) {
    const itemData = item.data[ itemKey ]
    itemsByKey.data[ itemData.name ] = {
      ...itemData,
      // Add the extra variable: `key`
      key: itemKey,
    }
  }

  // Add version to the product object
  itemsByKey.version = item.version

  // Write to file
  fs.writeFileSync(
    `src/generated/itemByKey.json`,
    JSON.stringify(itemsByKey),
  )
}
