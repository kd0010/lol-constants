import fs from 'fs'
import summoner from '../summoner.json'
import { getExportStatement } from './Helpers/getExportStatement'

(async () => {
  const spellNames: {
    [spellKey: string]: any
  } = {}

  // Add all summoners spell data to each corresponding key value
  let spellId: keyof typeof summoner.data
  for (spellId in summoner.data) {
    const spellData = summoner.data[ spellId ]
    spellNames[spellData.key] = spellData.name
  }

  // Write to file
  const constName = 'SpellNames'
  fs.writeFileSync(
    `tmp/${constName}.ts`,
    getExportStatement(
      constName,
      spellNames,
    ),
  )
})()
