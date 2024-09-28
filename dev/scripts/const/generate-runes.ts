import {StatRunesArr} from '../../constants/StatRunesArr'
import {RunesReforged} from '../../generated/RunesReforged'
import {writeToTmpFile} from '../../helpers/writeToTmpFile'

const runeObjects: {[runeId: string]: {
  id: number
  key: string
  name: string
  treeId: number | null
  isKeystone: boolean
  slot: number
  horizontal: number[]
}} = {}
const runeKeysAsKeys: {[runeId: string]: number} = {}
const runeNamesAsKeys: {[runeKey: string]: number} = {}

for (const section of RunesReforged) {
  for (const slot of section.slots) {
    for (const rune of slot.runes) {
      runeKeysAsKeys[rune.key] = rune.id
      runeNamesAsKeys[rune.name] = rune.id
    }
  }
}

const KEYSTONE_ROW_INDEX: number = 0

for (const section of RunesReforged) {
  for (let slotIdx = 0; slotIdx < section.slots.length; slotIdx++) {
    const slot = section.slots[slotIdx]
    const isKeystone = slotIdx == KEYSTONE_ROW_INDEX
    const allSlotRuneIds = slot.runes.map(({id}) => id)
    for (const rune of slot.runes) {
      runeObjects[rune.id] = {
        id: rune.id,
        key: rune.key,
        name: rune.name,
        treeId: section.id,
        isKeystone,
        slot: slotIdx,
        horizontal: allSlotRuneIds.filter(id => id != rune.id),
      }
    }
  }
}

// ---

const statRuneObjs: {[id: string]: {
  id: number
  name: string
  description: string
  value: number
}} = {}
const statRuneNamesAsKeys: {[name: string]: number} = {}

const statRuneInSlotObjs: {[slotIndex: string]: {[id: string]: {
  id: number
  name: string
  description: string
  value: number
  slot: number
  horizontal: number[]
}}} = {}
let statRuneInSlotObjsArrSt = ''

for (const rune of StatRunesArr) {
  statRuneObjs[rune.id] = {
    id: rune.id,
    name: rune.name,
    description: rune.description,
    value: rune.value,
  }
  statRuneNamesAsKeys[rune.name] = rune.id

  for (const slot of rune.slots) {
    statRuneInSlotObjs[rune.id] ??= {}
    statRuneInSlotObjs[rune.id][slot] = {
      id: rune.id,
      name: rune.name,
      description: rune.description,
      value: rune.value,
      slot,
      horizontal: StatRunesArr.filter(({slots}) => (slots as readonly number[]).includes(slot)).map(({id}) => id).filter(id => id != rune.id),
    }
    statRuneInSlotObjsArrSt += `StatRunesInSlot[${rune.id}][${slot}],`
  }
}

// ---

const runeTreeObjs: {[id: string]: {id: number, key: string, name: string}} = {}
const runeTreeKeysAsKeys: {[key: string]: number} = {}
const runeTreeNamesAsKeys: {[name: string]: number} = {}

for (const section of RunesReforged) {
  runeTreeObjs[section.id] = {
    id: section.id,
    key: section.key,
    name: section.name,
  }
  runeTreeKeysAsKeys[section.key] = section.id
  runeTreeNamesAsKeys[section.name] = section.id
}

// ===

await writeToTmpFile(
  'Runes',
  {
    constName: 'Runes',
    json: runeObjects,
  },
  {
    constName: 'runeKeys',
    json: runeKeysAsKeys,
  },
  {
    constName: 'runeNames',
    json: runeNamesAsKeys,
  },
  {
    constName: '',
    json: {},
    rawInput: `export const RunesArr = Object.values(Runes)
export type RuneId = typeof RunesArr[number]['id']
export type RuneKey = typeof RunesArr[number]['key']
export type RuneName = typeof RunesArr[number]['name']`,
  },
  // ---
  {
    constName: 'StatRunes',
    json: statRuneObjs,
  },
  {
    constName: 'StatRunesInSlot',
    json: statRuneInSlotObjs,
  },
  {
    constName: '',
    json: {},
    rawInput: `export const StatRunesInSlotArr = [${statRuneInSlotObjsArrSt}] as const`,
  },
  {
    constName: 'statRuneNames',
    json: statRuneNamesAsKeys,
  },
  {
    constName: '',
    json: {},
    rawInput: `export const StatRunesArr = Object.values(StatRunes)
export type StatRuneId = typeof StatRunesArr[number]['id']
export type StatRuneName = typeof StatRunesArr[number]['name']`,
  },
  // ---
  {
    constName: 'RuneTrees',
    json: runeTreeObjs,
  },
  {
    constName: 'runeTreeKeys',
    json: runeTreeKeysAsKeys,
  },
  {
    constName: 'runeTreeNames',
    json: runeTreeNamesAsKeys,
  },
  {
    constName: '',
    json: {},
    rawInput: `export const RuneTreesArr = Object.values(RuneTrees)
export type RuneTreeId = typeof RuneTreesArr[number]['id']
export type RuneTreeKey = typeof RuneTreesArr[number]['key']
export type RuneTreeName = typeof RuneTreesArr[number]['name']`,
  },
)
