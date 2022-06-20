import { generateChampionsByKey } from '../Helpers/generateChampionsByKey'
import { generateChampionsByName } from '../Helpers/generateChampionsByName'
import { generateItemsByName } from '../Helpers/generateItemsByName'
import { generateRunesById } from '../Helpers/generateRunesById'
import { generateRunesByName } from '../Helpers/generateRunesByName'
import { generateSummonerSpellsByKey } from '../Helpers/generateSummonerSpellsByKey'
import { generateSummonerSpellsByName } from '../Helpers/generateSummonerSpellsByName'

const generateJSONs = () => {
  generateChampionsByKey()
  generateChampionsByName()
  generateItemsByName()
  generateRunesById()
  generateRunesByName()
  generateSummonerSpellsByKey()
  generateSummonerSpellsByName()
}

generateJSONs()

export {}
