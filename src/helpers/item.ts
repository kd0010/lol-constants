import {ItemSrTypes} from '../enums/ItemSrTypes'
import {
  bootsItemIds,
  failsafeItem,
  ItemId,
  ItemName,
  itemNames,
  Items,
  ItemsArr,
} from '../objects/generated/Items'
import {MapId, MapsArr} from '../objects/Maps'

/**
 * Get an item by its **id** or **name**.
 * 
 * Item categorization is focused on Summoner's Rift. Item's `srType` field denotes:
 * - `0`: Starter items (Summoner's Rift)
 * - `1`: Basic items (Summoner's Rift)
 * - `2`: Epic items (Summoner's Rift)
 * - `3`: Legendary items (Summoner's Rift)
 * - `11`: Trinkets (Summoner's Rift)
 * - `12`: Boots (Summoner's Rift)
 * - `13`: Consumables (Summoner's Rift)
 * - `-1`: Misc. & Uncategorized (Summoner's Rift & other maps)
 * 
 * ---
 * Second argument `mapId` only applies to getting an item by its **name**:
 * 
 * Since there can be duplicate item names intended for different maps,
 * `mapId` denotes which map should be prioritized.
 * Function may still return an item for a provided `itemName`
 * even if it does not match the provided `mapId`.
 * 
 * Defaults to `11` (Summoner's Rift).
 * 
 * Use `lol.item.isAvailable` to determine whether item is available on a certain map.
 */
export function getItem(id_name: ItemId | ItemName, mapId: MapId=11): typeof Items[keyof typeof Items] {
  if (typeof id_name == 'number') return Items[id_name]
  return Items[getItemIdByName(id_name, mapId)] ?? failsafeItem
}

/** @see `getItem` */
function getItemIdByName(itemName: ItemName, mapId: MapId=11): ItemId {
  const itemIdOrMaps = itemNames[itemName]
  if (typeof itemIdOrMaps == 'number') {
    const itemId = itemIdOrMaps
    return itemId
  } else {
    const maps = itemIdOrMaps
    const itemId = maps[mapId]
    if (itemId != null) {
      return itemId
    } else {
      // Take another map, at least. In order: Summoner's Rift, Howling Abyss, Arena etc.
      let itemId: ItemId | undefined
      if (itemId = maps[11]) return itemId
      if (itemId = maps[12]) return itemId
      if (itemId = maps[30]) return itemId
      for (const {id} of MapsArr) {
        if (itemId = maps[id]) return itemId
      }
      return 2003 // If all else fails, return a health potion (though generated files by design should not reach this)
    }
  }
}

export function isStarterItem(item_id_name: typeof ItemsArr[number] | ItemId | ItemName | 0): boolean {
  if (item_id_name == 0) return false
  if (typeof item_id_name == 'object') return item_id_name.srType == ItemSrTypes.STARTER
  return getItem(item_id_name).srType == ItemSrTypes.STARTER
}

export function isBasicItem(item_id_name: typeof ItemsArr[number] | ItemId | ItemName | 0): boolean {
  if (item_id_name == 0) return false
  if (typeof item_id_name == 'object') return item_id_name.srType == ItemSrTypes.BASIC
  return getItem(item_id_name).srType == ItemSrTypes.BASIC
}

export function isEpicItem(item_id_name: typeof ItemsArr[number] | ItemId | ItemName | 0): boolean {
  if (item_id_name == 0) return false
  if (typeof item_id_name == 'object') return item_id_name.srType == ItemSrTypes.EPIC
  return getItem(item_id_name).srType == ItemSrTypes.EPIC
}

export function isLegendaryItem(item_id_name: typeof ItemsArr[number] | ItemId | ItemName | 0): boolean {
  if (item_id_name == 0) return false
  if (typeof item_id_name == 'object') return item_id_name.srType == ItemSrTypes.LEGENDARY
  return getItem(item_id_name).srType == ItemSrTypes.LEGENDARY
}

export function isTrinketItem(item_id_name: typeof ItemsArr[number] | ItemId | ItemName | 0): boolean {
  if (item_id_name == 0) return false
  if (typeof item_id_name == 'object') return item_id_name.srType == ItemSrTypes.TRINKET
  return getItem(item_id_name).srType == ItemSrTypes.TRINKET
}

export function isBootsItem(item_id_name: typeof ItemsArr[number] | ItemId | ItemName | 0): boolean {
  if (item_id_name == 0) return false
  if (typeof item_id_name == 'object') return item_id_name.id in bootsItemIds
  if (typeof item_id_name == 'number') return item_id_name in bootsItemIds
  return getItemIdByName(item_id_name) in bootsItemIds
}

export function isConsumableItem(item_id_name: typeof ItemsArr[number] | ItemId | ItemName | 0): boolean {
  if (item_id_name == 0) return false
  if (typeof item_id_name == 'object') return item_id_name.srType == ItemSrTypes.CONSUMABLE
  return getItem(item_id_name).srType == ItemSrTypes.CONSUMABLE
}

/** Check whether item is available on a certain map. */
export function isItemAvailableOnMap(itemId: ItemId, mapId: MapId): boolean {
  const mapsObjOrItemId = itemNames[Items[itemId].name]
  if (typeof mapsObjOrItemId == 'number') return false // Means item is disabled on all maps
  return mapId in mapsObjOrItemId
}

export function isItemId(id: number | null | undefined): id is ItemId {
  return typeof id == 'number' && id in Items
}

export function isItemName(name: string | null | undefined): name is ItemName {
  return typeof name == 'string' && name in itemNames
}
