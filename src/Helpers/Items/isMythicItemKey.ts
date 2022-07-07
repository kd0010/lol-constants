import { MythicItemNames } from '../../Constants/Items/MythicItemNames'
import { MythicItemKey } from '../../types'

export function isMythicItemKey(key: string): key is MythicItemKey {
  return key in MythicItemNames
}
