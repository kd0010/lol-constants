import { generateChampionsByKey } from '../Helpers/generateChampionsByKey'
import { generateChampionsByName } from '../Helpers/generateChampionsByName'
import { generateItemsByName } from '../Helpers/generateItemsByName'
import { generateRunesById } from '../Helpers/generateRunesById'
import { generateRunesByName } from '../Helpers/generateRunesByName'
import { generateSummonersByKey } from '../Helpers/generateSummonersByKey'
import { generateSummonersByName } from '../Helpers/generateSummonersByName'

const generateJSONs = () => {
  generateChampionsByKey()
  generateChampionsByName()
  generateItemsByName()
  generateRunesById()
  generateRunesByName()
  generateSummonersByKey()
  generateSummonersByName()
}

generateJSONs()

export {}
