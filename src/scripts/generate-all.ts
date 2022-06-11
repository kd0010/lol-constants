import { generateChampionsByKey } from '../Helpers/generateChampionsByKey'
import { generateChampionsByName } from '../Helpers/generateChampionsByName'

const generateJSONs = () => {
  generateChampionsByKey()
  generateChampionsByName()
}

generateJSONs()

export {}
