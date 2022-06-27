import runesByName from '../assets/generated/runesByName.json'
import { TreeRuneName } from '../types'

export const TreeRuneNames: TreeRuneName[] = (
  Object.keys(runesByName).map(name => name as keyof typeof runesByName)
)
