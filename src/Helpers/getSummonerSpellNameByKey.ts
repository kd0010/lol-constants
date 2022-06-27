import summonerByKey from '../assets/generated/summonerByKey.json'
import { SummonerSpellKey, SummonerSpellName } from '../types'

export function getSummonerSpellNameByKey(
  key: SummonerSpellKey,
): SummonerSpellName {
  return summonerByKey.data[ key ].name as SummonerSpellName
}
