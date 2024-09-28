import {writeFile} from 'fs/promises'
import {Locale} from '../../../src/Locale'
import {Patch} from '../../../src/Patch'

const res = await fetch(`http://ddragon.leagueoflegends.com/cdn/${Patch.version}.1/data/${Locale}/runesReforged.json`)
const jsonText = await res.text()

const text = `export const RunesReforged = ${jsonText} as const`
await writeFile('./dev/generated/RunesReforged.ts', text, {encoding: 'utf-8'})
