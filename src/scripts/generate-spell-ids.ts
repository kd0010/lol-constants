import fs from 'fs'
import summoner from '../assets/summoner.json'

(async () => {
  const spellIds: {
    [spellKey: string]: any
  } = {}

  // Add all summoners spell data to each corresponding key value
  let spellId: keyof typeof summoner.data
  for (spellId in summoner.data) {
    const spellData = summoner.data[ spellId ]
    spellIds[spellData.key] = spellId
  }

  // Write to file
  fs.writeFileSync(
    `tmp/spellIds.json`,
    JSON.stringify(spellIds),
  )
})()
