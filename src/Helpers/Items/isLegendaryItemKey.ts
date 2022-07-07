import { LegendaryItemNames } from '../../Constants/Items/LegendaryItemNames'
import { LegendaryItemKey } from '../../types'

export function isLegendaryItemKey(key: string): key is LegendaryItemKey {
  return key in LegendaryItemNames
}
