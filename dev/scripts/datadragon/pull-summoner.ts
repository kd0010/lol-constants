import {writeFile} from 'fs/promises'
import {Locale} from '../../../src/Locale'
import {Patch} from '../../../src/Patch'

const res = await fetch(`http://ddragon.leagueoflegends.com/cdn/${Patch.version}.1/data/${Locale}/summoner.json`)
const jsonText = await res.text()

const text = `export const Summoner = ${jsonText} as const`
await writeFile('./dev/generated/Summoner.ts', text, {encoding: 'utf-8'})
