// `srTypes` for items script

import {writeFile} from 'fs/promises'
import {JSDOM} from 'jsdom'

const failMsg = 'fail in script: item-categories-wiki'
const url = 'https://leagueoflegends.fandom.com/wiki/Item_(League_of_Legends)'
const res = await fetch(url)

const dom = new JSDOM(await res.text())
const document = dom.window.document

const listings = document.getElementsByClassName('tlist')
if (listings == null) throw failMsg

const extractItemNames = (div: Element | null) => {
  const itemNames: string[] = []
  if (div == null) throw failMsg
  const _ul = div.firstChild
  if (_ul == null || _ul.nodeName != 'UL') throw failMsg
  const ul = _ul as HTMLUListElement
  for (const _li of ul.children) {
    if (_li.nodeName != 'LI') throw failMsg
    const li = _li as HTMLLIElement
    const img = li.querySelector('img')
    if (img == null) throw failMsg
    const itemName = img.alt.slice(0, img.alt.indexOf(' item'))
    itemNames.push(itemName)
  }
  return itemNames
}

// ---

/**
 * 0: starter
 * 1: basic
 * 2: epic
 * 3: legendary
 * 11: trinket
 * 12: boots
 * 13: consumable
 * 99: removed/inactive
 * -1: other
 */
const itemNamesByCtg = {
  '0': [] as string[],
  '1': [] as string[],
  '2': [] as string[],
  '3': [] as string[],
  '11': [] as string[],
  '12': [] as string[],
  '13': [] as string[],
  '99': [] as string[],
  '-1': [] as string[],
}

// "Starter items"
itemNamesByCtg[0].push(...extractItemNames(listings.item(0)))

// "Potions and Consumables"
itemNamesByCtg[13].push(...extractItemNames(listings.item(1)))
itemNamesByCtg[13].push(...extractItemNames(listings.item(3)))
// itemNamesByCtg[13].push(...extractItemNames(listings.item(11)))

// "Trinkets"
itemNamesByCtg[11].push(...extractItemNames(listings.item(2)))

// "Boots"
itemNamesByCtg[12].push(...extractItemNames(listings.item(4)))

// "Basic items"
itemNamesByCtg[1].push(...extractItemNames(listings.item(5)))

// "Epic items"
itemNamesByCtg[2].push(...extractItemNames(listings.item(6)))

// "Legendary items"
itemNamesByCtg[3].push(...extractItemNames(listings.item(7)))
// itemNamesByCtg[3].push(...extractItemNames(listings.item(10)))
// itemNamesByCtg[3].push(...extractItemNames(listings.item(12)))

// "Removed items"
// itemNamesByCtg[99].push(...extractItemNames(listings.item(13)))

// "Other"
itemNamesByCtg[-1].push(...extractItemNames(listings.item(8)))
itemNamesByCtg[-1].push(...extractItemNames(listings.item(9)))
itemNamesByCtg[-1].push(...extractItemNames(listings.item(13))) // "Removed items"

// ---

const out: {[itemName: string]: number} = {}

let itemType: keyof typeof itemNamesByCtg
for (itemType in itemNamesByCtg) {
  const itemNames = itemNamesByCtg[itemType]
  for (let itemName of itemNames) {
    itemName = itemName.toLowerCase()

    out[itemName] = Number(itemType)

    // Override some stuff
    if (itemName == 'Slightly Magical Boots'.toLowerCase()) delete out[itemName] // "Slightly Magical Boots"
    out['Slightly Magical Footwear'.toLowerCase()] = 12

    out['Sin Eater'.toLowerCase()] = 3
    out['Lightning Braid'.toLowerCase()] = 3

    // New patch 25.S1.1 shenanigans
    out['Swiftmarch'.toLowerCase()] = 12
    out['Crimson Lucidity'.toLowerCase()] = 12
    out['Gunmetal Greaves'.toLowerCase()] = 12
    out['Chainlaced Crushers'.toLowerCase()] = 12
    out['Armored Advance'.toLowerCase()] = 12
    out["Spellslinger's Shoes".toLowerCase()] = 12
    out['Forever Forward'.toLowerCase()] = 12
    //
    out["Bloodletter's Curse".toLowerCase()] = 3
  }
}

await writeFile('./dev/generated/itemNameToCtg.json', JSON.stringify(out), {encoding: 'utf-8'})

console.log(`Pulled categories for ${Object.keys(out).length} items.`)
