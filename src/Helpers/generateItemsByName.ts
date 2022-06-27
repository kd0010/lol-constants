import fs from 'fs'
import item from '../assets/item.json'

export function generateItemsByName(): void {
  const itemByName: {
    data: {
      [k: string]: any
    }
    version: string
  } = {
    data: {},
    version: '',
  }

  // Add all items' data to each corresponding name value
  let itemKey: keyof typeof item.data
  for (itemKey in item.data) {
    const itemData = item.data[ itemKey ]
    itemByName.data[ itemData.name ] = {
      ...itemData,
      // Add the extra variable: `key`
      // because it is esentially being overwritten.
      key: itemKey,
    }
  }

  // Add version to the product object
  itemByName.version = item.version

  // Write to file
  fs.writeFileSync(
    `src/assets/generated/itemByName.json`,
    JSON.stringify(itemByName),
  )
}
