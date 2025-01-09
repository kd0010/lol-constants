import {writeFile} from 'fs/promises'
import {Item} from '../../generated/Item'
import itemNameToCtg from '../../generated/itemNameToCtg.json' with {type: 'json'}
import {parseNumber} from '../../helpers/parseNumber'
import {writeToTmpFile} from '../../helpers/writeToTmpFile'

const ITEM_IDS_TO_SKIP = {
  1502: true, // "Reinforced Armor"
  1506: true, // "Reinforced Armor"
  1516: true, // "Structure Bounty"
  1517: true, // "Structure Bounty"
  1518: true, // "Structure Bounty"
  1519: true, // "Structure Bounty"
  1501: true, // "Fortification"
  1521: true, // "Fortification"
  1105: true, // "Mosstomper Seedling" (old id)
  1106: true, // "Gustwalker Hatchling" (old id)
  1107: true, // "Scorchclaw Pup" (old id)
  322065: true, // Unknown
  323002: true, // Unknown
  323003: true, // Unknown
  323004: true, // Unknown
  323050: true, // Unknown
  323070: true, // Unknown
  323075: true, // Unknown
  323107: true, // Unknown
  323109: true, // Unknown
  323110: true, // Unknown
  323119: true, // Unknown
  323190: true, // Unknown
  323222: true, // Unknown
  323504: true, // Unknown
  324005: true, // Unknown
  326616: true, // Unknown
  326617: true, // Unknown
  326620: true, // Unknown
  326621: true, // Unknown
  326657: true, // Unknown
  328020: true, // Unknown
  447105: true, // Removed, Arena item
}

const VALID_SR_TYPES = {
  '0': true,
  '1': true,
  '2': true,
  '3': true,
  '11': true,
  '12': true,
  '13': true,
  '-1': true,
}

/** From `failedItems.json` */
const itemTypeFillers: {[itemName: string]: number} = {
  "Penetrating Bullets": -1, // some tower item
  "OvererchargedHA": -1, // some tower item
  "Tower Power-Up": -1, // some tower item
  "Chemtech Putrifier": -1, // arena exclusive, no longer on SR
  "Kalista's Black Spear": -1, // other
  "Sylas' Black Spear": -1, // other
  "Night Harvester": -1, // arena exclusive, no longer on SR
  "Demonic Embrace": -1, // arena exclusive, no longer on SR
  "Prowler's Claw": -1, // arena exclusive, no longer on SR
  "Gangplank Placeholder": -1, // other
  "Anathema's Chains": -1, // arena exclusive, no longer on SR
}

type Item = {
  id: number
  name: string
  srType: number
}
const items: {[itemId: string]: Item} = {}
const itemNamesAsKeys: {[itemName: string]: number | {[mapId: string]: number}} = {}
const bootsItemIdsAsKeys: {[bootsItemId: string]: true} = {}
const _idsThatBelongToName: {[itemName: string]: number[]} = {}
const _failedItemNames: string[] = []

let itemId: keyof typeof Item.data
for (itemId in Item.data) {
  if (itemId in ITEM_IDS_TO_SKIP) continue

  const item = Item.data[itemId]
  let cleanItemName = item.name.replace(/<[^>]*>?/gm, '').replace('500 Silver Serpents', '')
  const itemIdNum = parseNumber(itemId, 'itemId')

  if (item.name == "Kalista's Black Spear" && item['requiredChampion'] == 'Sylas') {
    // avoids duplicate item names
    cleanItemName = "Sylas' Black Spear" // It's now his, since he has stolen it...
  }

  // commented because shall include all items for now
  // if (Object.values(item.maps).every(value => value === false)) continue // completely inactive items

  const isSrItem = item.maps[11]
  let srType: number | undefined = isSrItem
    ? itemNameToCtg[cleanItemName.toLowerCase()]
    : -1
  
  srType ??= itemTypeFillers[cleanItemName]

  if (srType === undefined) _failedItemNames.push(cleanItemName)
  if (_failedItemNames.length == 0 && !(srType in VALID_SR_TYPES)) throw `Unexpected "srType" encountered: ${srType} for item ${cleanItemName}`

  items[itemId] = {
    id: itemIdNum,
    name: cleanItemName,
    srType: srType ?? -1,
  }

  const mapsObj = (itemNamesAsKeys[cleanItemName] ??= {}) as {[mapId: string]: number} // it is not yet the other variant (number)
  for (const mapId in item.maps) {
    if (!item.maps[mapId]) continue
    if (mapId in mapsObj) throw `Unhandled map overlap caught for item: ${cleanItemName}`
    mapsObj[mapId] = itemIdNum
  }

  // @ts-ignore there is such tag
  if (item.tags.includes('Boots')) {
    bootsItemIdsAsKeys[itemId] = true
  }

  _idsThatBelongToName[cleanItemName] ??= []
  _idsThatBelongToName[cleanItemName].push(itemIdNum)
}

if (_failedItemNames.length != 0) {
  await writeFile('dev/generated/failedItemNames.json', JSON.stringify(_failedItemNames), 'utf-8')
  throw `Failed to find category for items: failedItemNames.json; add necessary items to itemNameToCtg.json`
}

// Finalize value (mapsObjOrItemId) for each item
for (const itemName in itemNamesAsKeys) {
  const mapObj = itemNamesAsKeys[itemName] as {[mapId: string]: number}
  let itemIds: number[] = []
  for (const mapId in mapObj) {
    const itemId = mapObj[mapId]
    itemIds.push(itemId)
  }

  const uniqueItemIds = [...new Set(itemIds)]

  // Optimize for space: {"11": 2003, "12": 2003} => 2003
  // if (uniqueItemIds.length == 1) {
  //   itemNamesAsKeys[itemName] = uniqueItemIds[0]
  // }

  // For empty maps object (inactive item),
  // choose its ID as the numerically lowest matching one for that item name
  if (uniqueItemIds.length == 0) {
    const ids = _idsThatBelongToName[itemName]
    const lowestItemId = ids.sort((a, b) => a - b).at(0)
    if (lowestItemId == null) throw `Item ID not found for item: ${itemName}`
    itemNamesAsKeys[itemName] = lowestItemId
  }
}

// Just in case, check if there are any empty objects
// where there are supposed to be maps or a singular item id
for (const itemName in itemNamesAsKeys) {
  const itemIdOrMaps = itemNamesAsKeys[itemName]
  if (typeof itemIdOrMaps == 'number') continue
  if (Object.keys(itemIdOrMaps).length == 0) throw `Empty object for maps object in items for item: ${itemName}`
}

// Manual
const itemIdOrMapsObj = itemNamesAsKeys['Zephyr']
if (typeof itemIdOrMapsObj == 'number') bootsItemIdsAsKeys[itemIdOrMapsObj] = true
else Object.values(itemNamesAsKeys['Zephyr']).forEach(id => bootsItemIdsAsKeys[id] = true)

await writeToTmpFile(
  'Items',
  {
    constName: 'Items',
    json: items,
  },
  {
    constName: '',
    json: [],
    rawInput: `export const ItemsArr = Object.values(Items)
export type ItemId = typeof ItemsArr[number]['id']
export type ItemName = typeof ItemsArr[number]['name']`,
  },
  {
    constName: 'itemNames',
    json: itemNamesAsKeys,
    customTypeAnnotation: '{[name in ItemName]: ItemId | {[mapId: string]: ItemId}}',
  },
  {
    constName: 'bootsItemIds',
    json: bootsItemIdsAsKeys,
  },
)
