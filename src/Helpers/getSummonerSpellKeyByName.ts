import summonerByName from '../assets/generated/summonerByName.json'
import { SummonerSpellKey, SummonerSpellName } from '../types'

export function getSummonerSpellKeyByName(
  name: SummonerSpellName,
): SummonerSpellKey {
  return summonerByName.data[ name ].key as SummonerSpellKey
}
