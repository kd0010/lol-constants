import { BootsItemNames } from '../BootsItemNames'
import item from '../item.json'
import { LegendaryItemNames } from '../LegendaryItemNames'
import { MythicItemNames } from '../MythicItemNames'
import { writeToTmpFile } from './Helpers/writeToTmpFile'

(async () => {
  const itemKeys: {
    [category in (
      | 'mythic'
      | 'legendary'
      | 'boots'
    )]: {
      [itemName: string]: string
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
        itemKeys.mythic[itemData.name] = itemKey
      }
    }
  }

  // Add Legendary Items
  for (const itemName of LegendaryItemNames) {
    let itemKey: keyof typeof item.data
    for (itemKey in item.data) {
      const itemData = item.data[itemKey]

      if (itemData.name == itemName) {
        itemKeys.legendary[itemData.name] = itemKey
      }
    }
  }

  // Add Boots
  for (const itemName of BootsItemNames) {
    let itemKey: keyof typeof item.data
    for (itemKey in item.data) {
      const itemData = item.data[itemKey]

      if (itemData.name == itemName) {
        itemKeys.boots[itemData.name] = itemKey
      }
    }
  }

  writeToTmpFile(
    'MythicItemKeys',
    {
      constName: 'MythicItemKeys',
      json: itemKeys.mythic,
    },
  )
  writeToTmpFile(
    'LegendaryItemKeys',
    {
      constName: 'LegendaryItemKeys',
      json: itemKeys.legendary,
    },
  )
  writeToTmpFile(
    'BootsItemKeys',
    {
      constName: 'BootsItemKeys',
      json: itemKeys.boots,
    },
  )

  console.log(
    `\n--= Categorized Item Keys =--`,
    `\ngenerated:`,
    `\n    Mythic Items:     ${Object.values(itemKeys.mythic).length}`,
    `\n    Legendary Items:  ${Object.values(itemKeys.legendary).length}`,
    `\n    Boots Items:      ${Object.values(itemKeys.boots).length}`,
    `\n`,
  )
})()
