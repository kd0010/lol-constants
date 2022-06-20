import runesByName from '../generated/runesByName.json'
import { RuneName } from '../types'

export const RuneNames: RuneName[] = (
  Object.keys(runesByName).map(name => name as keyof typeof runesByName)
)
