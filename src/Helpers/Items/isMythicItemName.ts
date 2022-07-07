import { MythicItemKeys } from '../../Constants/Items/MythicItemKeys'
import { MythicItemName } from '../../types'

export function isMythicItemName(name: any): name is MythicItemName {
  return name in MythicItemKeys
}
