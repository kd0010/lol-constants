import fs from 'fs'
import summoner from '../assets/summoner.json'

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
  fs.writeFileSync(
    `tmp/spellKeys.json`,
    JSON.stringify(spellKeys),
  )
})()
