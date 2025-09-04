import {lol} from 'lol-constants'

const response: Array<{
  championName: string // ← is `string` and not `ChampionName`
  damageDealt: number
  /* ... */
}> = [
  {
    championName: 'Hwei',
    damageDealt: 2700,
    /* ... */
  },
]

for (const data of response) {
  if (!lol.type.isChampionName(data.championName)) continue // Should never skip on clean data or not necessary if you have a typed response

  // Can now use `data.championName` in method
  const {key, id, name} = lol.champion.get(data.championName)
  // ...
}

/* Alternatively... (shorthand) */

import {getChampion, isChampionName} from 'lol-constants'

for (const data of response) {
  if (!isChampionName(data.championName)) continue // Should never skip on clean data or not necessary if you have a typed response

  // Can now use `data.championName` in method
  const {key, id, name} = getChampion(data.championName)
  // ...
}
