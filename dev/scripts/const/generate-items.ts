import {writeFile} from 'fs/promises'
import {ItemSrType, ItemSrTypes} from '../../../src/enums/ItemSrTypes'
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
  322065: true, // Swiftplay item
  323002: true, // Swiftplay item
  323003: true, // Swiftplay item
  323004: true, // Swiftplay item
  323050: true, // Swiftplay item
  323070: true, // Swiftplay item
  323075: true, // Swiftplay item
  323107: true, // Swiftplay item
  323109: true, // Swiftplay item
  323110: true, // Swiftplay item
  323119: true, // Swiftplay item
  323190: true, // Swiftplay item
  323222: true, // Swiftplay item
  323040: true, // Swiftplay item
  323504: true, // Swiftplay item
  324005: true, // Swiftplay item
  326616: true, // Swiftplay item
  326617: true, // Swiftplay item
  326620: true, // Swiftplay item
  326621: true, // Swiftplay item
  326657: true, // Swiftplay item
  328020: true, // Swiftplay item
  323042: true, // Swiftplay item
  323121: true, // Swiftplay item
  447105: true, // Removed, Arena item
  667666: true, // Non-SR The Collector
}

const VALID_SR_TYPES: {[srType in ItemSrType]} = {
  '0': true,
  '1': true,
  '2': true,
  '3': true,
  '11': true,
  '12': true,
  '13': true,
  '-1': true,
  '-2': false,
}

/** From `failedItems.json` */
const itemTypeFillers: {[itemName: string]: number} = {
  "Penetrating Bullets": ItemSrTypes.NONSR, // some tower item
  "OvererchargedHA": ItemSrTypes.NONSR, // some tower item
  "Tower Power-Up": ItemSrTypes.NONSR, // some tower item
  "Chemtech Putrifier": ItemSrTypes.NONSR, // arena exclusive, no longer on SR
  "Kalista's Black Spear": ItemSrTypes.NONSR, // other
  "Sylas' Black Spear": ItemSrTypes.NONSR, // other
  "Night Harvester": ItemSrTypes.NONSR, // arena exclusive, no longer on SR
  "Demonic Embrace": ItemSrTypes.NONSR, // arena exclusive, no longer on SR
  "Prowler's Claw": ItemSrTypes.NONSR, // arena exclusive, no longer on SR
  "Gangplank Placeholder": ItemSrTypes.NONSR, // other
  "Anathema's Chains": ItemSrTypes.NONSR, // arena exclusive, no longer on SR
  "Atma's Reckoning": ItemSrTypes.NONSR, // arena item
  "Demon King's Crown": ItemSrTypes.NONSR, // arena item
  "Shield of Molten Stone": ItemSrTypes.NONSR, // arena item
  "Cloak of Starry Night": ItemSrTypes.NONSR, // arena item
  "Sword of the Divine": ItemSrTypes.NONSR, // arena item
  "Hextech Gunblade": ItemSrTypes.NONSR, // arena item
  "Zephyr": ItemSrTypes.NONSR, // arena item
  "Gargoyle Stoneplate": ItemSrTypes.NONSR, // arena item
  "Sword of Blossoming Dawn": ItemSrTypes.NONSR, // arena item
  "The Golden Spatula": ItemSrTypes.NONSR, // arena item
  "Crown of the Shattered Queen": ItemSrTypes.NONSR, // arena item
  "Gambler's Blade": ItemSrTypes.NONSR, // arena item
  "Cruelty": ItemSrTypes.NONSR, // arena item
  "Flesheater": ItemSrTypes.NONSR, // arena item
  "Veigar's Talisman of Ascension": ItemSrTypes.NONSR, // doom bots item
}

type Item = {
  id: number
  name: string
  srType: number
}
const items: {[itemId: string]: Item} = {}
const failsafeItem: Item = {id: 0, name: '', srType: ItemSrTypes.NONSR}
const itemNamesAsKeys: {[itemName: string]: number | {[mapId: string]: number}} = {}
const bootsItemIdsAsKeys: {[bootsItemId: string]: true} = {}
const _idsThatBelongToName: {[itemName: string]: number[]} = {}
const _failedItemNames: string[] = []
const _failedMapOverlapItems: string[] = []

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
    : ItemSrTypes.NONSR

  srType ??= itemTypeFillers[cleanItemName]

  if (srType === undefined) _failedItemNames.push(cleanItemName)
  if (_failedItemNames.length == 0 && !(srType in VALID_SR_TYPES)) throw `Unexpected "srType" encountered: ${srType} for item ${cleanItemName}`

  items[itemId] = {
    id: itemIdNum,
    name: cleanItemName,
    srType: srType ?? ItemSrTypes.NONSR,
  }

  // Check for overlap in the maps in which the item appears
  const mapsObj = (itemNamesAsKeys[cleanItemName] ??= {}) as {[mapId: string]: number} // it is not yet the other variant (number)
  for (const mapId in item.maps) {
    if (!item.maps[mapId]) continue
    if (mapId in mapsObj) _failedMapOverlapItems.push(cleanItemName)
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
  await writeFile('dev/tmp/failedItemNames.json', JSON.stringify(_failedItemNames), 'utf-8')
  throw `Failed to find category for items: tmp/failedItemNames.json; add necessary items to itemNameToCtg.json`
}
if (_failedMapOverlapItems.length != 0) {
  await writeFile('dev/tmp/failedMapOverlapItems.json', JSON.stringify(_failedMapOverlapItems), 'utf-8')
  throw `Unacceptable map overlap for items: tmp/failedMapOverlapItems.json; eliminate the unnecessary items.`
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
    constName: 'failsafeItem',
    json: failsafeItem,
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
