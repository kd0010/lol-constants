import { PrimaryTrees } from '../../Constants/Runes/RuneSetsByRuneNames'
import { StatRuneIds } from '../../Constants/Runes/StatRuneIds'
import { RuneName, RuneTreeName, StatRunesCategory } from '../../types'

/**
 * Returns the name of the Rune Tree that the Rune belongs to.
 */
export function getRuneCategoryByRuneName(
  name: RuneName,
): RuneTreeName | StatRunesCategory {
  // Start with StatRunes because it is the tiniest of all
  if (name in StatRuneIds) return 'StatRunes'

  // Continue on with the rest of the runes
  if (name in PrimaryTrees.Precision) return 'Precision'
  if (name in PrimaryTrees.Domination) return 'Domination'
  if (name in PrimaryTrees.Sorcery) return 'Sorcery'
  if (name in PrimaryTrees.Resolve) return 'Resolve'
  if (name in PrimaryTrees.Inspiration) return 'Inspiration'

  // Note: It should be impossible to reach code this far
  //       so long as constants are not missing any values,
  //       and `name` is truly of type `RuneName`.
  return 'Precision'
}
