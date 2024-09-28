import {lol} from 'lol-constants'

const response: {
  championName: string // ← is `string` and not `ChampionName`
  damageDealt: number
  /* etc. */
}[] = [
  {
    championName: 'Hwei',
    damageDealt: 9000,
    /* etc. */
  },
]

for (const data of response) {
  if (!lol.type.isChampionName(data.championName)) continue // Should never skip on clean data

  // Can now use `data.championName` in method
  const {key, id, name} = lol.champion.get(data.championName)
  // ...
}

/* Alternatively... (shorthand) */

import {getChampion, isChampionName} from 'lol-constants'

for (const data of response) {
  if (!isChampionName(data.championName)) continue // Should never skip on clean data

  // Can now use `data.championName` in method
  const {key, id, name} = getChampion(data.championName)
  // ...
}
