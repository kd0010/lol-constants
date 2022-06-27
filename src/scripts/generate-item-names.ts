import fs from 'fs'
import item from '../assets/item.json'

(async () => {
  const itemNames: {
    [itemKey: string]: any
  } = {}

  // Add all items' data to each corresponding name value
  let itemKey: keyof typeof item.data
  for (itemKey in item.data) {
    const itemData = item.data[ itemKey ]
    let htmlEscapedName = itemData.name.replace(/<[^>]*>?/gm, '')
    itemNames[itemKey] = htmlEscapedName
  }

  // Write to file
  fs.writeFileSync(
    `tmp/itemNames.json`,
    JSON.stringify(itemNames),
  )
})()
