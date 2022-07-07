import { BootsItemNames } from '../BootsItemNames'
import item from '../item.json'
import { LegendaryItemNames } from '../LegendaryItemNames'
import { MythicItemNames } from '../MythicItemNames'
import { writeToTmpFile } from './Helpers/writeToTmpFile'

(async () => {
  const itemNames: {
    [category in (
      | 'mythic'
      | 'legendary'
      | 'boots'
    )]: {
      [itemKey: string]: string
    }
  } = {
    mythic: {},
    legendary: {},
    boots: {},
  }

  // Add Mythic Items
  for (const mythicItemName of MythicItemNames) {
    let itemKey: keyof typeof item.data
    for (itemKey in item.data) {
      const itemData = item.data[itemKey]

      if (itemData.name == mythicItemName) {
        itemNames.mythic[itemKey] = itemData.name
      }
    }
  }

  // Add Legendary Items
  for (const itemName of LegendaryItemNames) {
    let itemKey: keyof typeof item.data
    for (itemKey in item.data) {
      const itemData = item.data[itemKey]

      if (itemData.name == itemName) {
        itemNames.legendary[itemKey] = itemData.name
      }
    }
  }

  // Add Boots
  for (const itemName of BootsItemNames) {
    let itemKey: keyof typeof item.data
    for (itemKey in item.data) {
      const itemData = item.data[itemKey]

      if (itemData.name == itemName) {
        itemNames.boots[itemKey] = itemData.name
      }
    }
  }

  writeToTmpFile(
    'MythicItemNames',
    {
      constName: 'MythicItemNames',
      json: itemNames.mythic,
    },
  )
  writeToTmpFile(
    'LegendaryItemNames',
    {
      constName: 'LegendaryItemNames',
      json: itemNames.legendary,
    },
  )
  writeToTmpFile(
    'BootsItemNames',
    {
      constName: 'BootsItemNames',
      json: itemNames.boots,
    },
  )

  console.log(
    `\n--= Categorized Item Names =--`,
    `\ngenerated:`,
    `\n    Mythic Items:     ${Object.values(itemNames.mythic).length}`,
    `\n    Legendary Items:  ${Object.values(itemNames.legendary).length}`,
    `\n    Boots Items:      ${Object.values(itemNames.boots).length}`,
    `\n`,
  )
})()
