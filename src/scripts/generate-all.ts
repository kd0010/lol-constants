import { generateChampionsByKey } from '../Helpers/generateChampionsByKey'
import { generateChampionsByName } from '../Helpers/generateChampionsByName'
import { generateItemsByName } from '../Helpers/generateItemsByName'

const generateJSONs = () => {
  generateChampionsByKey()
  generateChampionsByName()
  generateItemsByName()
}

generateJSONs()

export {}
