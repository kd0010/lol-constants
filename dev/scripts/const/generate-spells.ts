import {Summoner} from '../../generated/Summoner'
import {parseNumber} from '../../helpers/parseNumber'
import {writeToTmpFile} from '../../helpers/writeToTmpFile'

type Spell = {id: number, key: string, name: string}
const spellsObj: {[spellId: string]: Spell} = {}
const failsafeSpell: Spell = {id: -1, key: '', name: ''}
const spellKeysAsKeys: {[spellKey: string]: number} = {}
const spellNamesAsKeys: {[spellName: string]: number} = {}

let spellId: keyof typeof Summoner.data
for (spellId in Summoner.data) {
  const spell = Summoner.data[spellId]
  const spellIdNum = parseNumber(spell.key, 'spellIdNum')
  const spellKey = spell.id
  
  let spellName: string = spell.name
  if (spellKey == 'SummonerCherryFlash') spellName = 'Flash (Arena)'
  if (spellKey == 'SummonerSnowURFSnowball_Mark') spellName = 'Mark (Snow URF)'

  if (spellName in spellNamesAsKeys) throw `duplicate spell name found: ${spellName}`
  
  spellsObj[spellIdNum] = {
    id: spellIdNum,
    key: spellKey,
    name: spellName,
  }
  spellKeysAsKeys[spellKey] = spellIdNum
  spellNamesAsKeys[spellName] = spellIdNum
}

await writeToTmpFile(
  'Spells',
  {
    constName: 'Spells',
    json: spellsObj,
  },
  {
    constName: 'failsafeSpell',
    json: failsafeSpell,
  },
  {
    constName: 'spellKeys',
    json: spellKeysAsKeys,
  },
  {
    constName: 'spellNames',
    json: spellNamesAsKeys,
  },
  {
    constName: '',
    json: {},
    rawInput: `export const SpellsArr = Object.values(Spells)
export type SpellId = typeof SpellsArr[number]['id']
export type SpellKey = typeof SpellsArr[number]['key']
export type SpellName = typeof SpellsArr[number]['name']`,
  },
)
