import fs from 'fs'
import item from '../assets/item.json'

(async () => {
  const itemKeys: {
    [itemName: string]: any
  } = {}

  // Add all items' data to each corresponding name value
  let itemKey: keyof typeof item.data
  for (itemKey in item.data) {
    const itemData = item.data[ itemKey ]
    let htmlEscapedName = itemData.name.replace(/<[^>]*>?/gm, '')
    itemKeys[htmlEscapedName] = itemKey
  }

  // Write to file
  fs.writeFileSync(
    `tmp/itemKeys.json`,
    JSON.stringify(itemKeys),
  )
})()
