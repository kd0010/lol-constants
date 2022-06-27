import fs from 'fs'
import item from '../assets/item.json'
import { getExportStatement } from './Helpers/getExportStatement'

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
  const constName = 'ItemNames'
  fs.writeFileSync(
    `tmp/${constName}.ts`,
    getExportStatement(
      constName,
      itemNames,
    ),
  )
})()
