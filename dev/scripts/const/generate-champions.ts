import {Champion} from '../../generated/Champion'
import {parseNumber} from '../../helpers/parseNumber'
import {writeToTmpFile} from '../../helpers/writeToTmpFile'

const championObjects: {[champId: string]: {id: number, key: string, name: string}} = {}
const championKeysAsKeys: {[champKey: string]: number} = {}
const championNamesAsKeys: {[champName: string]: number} = {}

let championId: keyof typeof Champion.data
for (championId in Champion.data) {
  const champ = Champion.data[championId]
  const champIdNum = parseNumber(champ.key, 'champIdNum')
  const champKey = champ.id
  const champName = champ.name

  championObjects[champIdNum] = {
    id: champIdNum,
    key: champKey,
    name: champName,
  }
  championKeysAsKeys[champKey] = champIdNum
  championNamesAsKeys[champName] = champIdNum
}

// Write to tmp file
await writeToTmpFile(
  'Champions',
  {
    constName: 'Champions',
    json: championObjects,
  },
  {
    constName: 'championKeys',
    json: championKeysAsKeys,
  },
  {
    constName: 'championNames',
    json: championNamesAsKeys,
  },
  {
    constName: '',
    json: {},
    rawInput: `export const ChampionsArr = Object.values(Champions)
export type ChampionId = typeof ChampionsArr[number]['id']
export type ChampionKey = typeof ChampionsArr[number]['key']
export type ChampionName = typeof ChampionsArr[number]['name']`,
  },
)
