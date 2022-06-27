import fs from 'fs'
import summoner from '../assets/summoner.json'
import { getExportStatement } from './Helpers/getExportStatement'

(async () => {
  const spellKeys: {
    [spellId: string]: any
  } = {}

  // Add all summoners spell data to each corresponding key value
  let spellId: keyof typeof summoner.data
  for (spellId in summoner.data) {
    const spellData = summoner.data[ spellId ]
    spellKeys[spellId] = spellData.key
  }

  // Write to file
  const constName = 'SpellKeys'
  fs.writeFileSync(
    `tmp/${constName}.ts`,
    getExportStatement(
      constName,
      spellKeys,
    ),
  )
})()
