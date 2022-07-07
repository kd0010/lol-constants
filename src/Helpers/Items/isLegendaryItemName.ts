import { LegendaryItemKeys } from '../../Constants/Items/LegendaryItemKeys'
import { LegendaryItemName } from '../../types'

export function isLegendaryItemName(name: any): name is LegendaryItemName {
  return name in LegendaryItemKeys
}
