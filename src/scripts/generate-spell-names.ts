import fs from 'fs'
import summoner from '../assets/summoner.json'

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
  fs.writeFileSync(
    `tmp/spellNames.json`,
    JSON.stringify(spellNames),
  )
})()
