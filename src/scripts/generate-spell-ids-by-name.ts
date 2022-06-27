import fs from 'fs'
import summoner from '../assets/summoner.json'
import { getExportStatement } from './Helpers/getExportStatement'

(async () => {
  const spellIds: {
    [spellName: string]: any
  } = {}

  // Add all summoners spell data to each corresponding key value
  let spellId: keyof typeof summoner.data
  for (spellId in summoner.data) {
    const spellData = summoner.data[ spellId ]
    spellIds[spellData.name] = spellId
  }

  // Write to file
  const constName = 'SpellIdsByName'
  fs.writeFileSync(
    `tmp/${constName}.ts`,
    getExportStatement(
      constName,
      spellIds,
    ),
  )
})()
