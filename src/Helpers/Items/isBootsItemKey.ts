import { BootsItemNames } from '../../Constants/Items/BootsItemNames'
import { BootsItemKey } from '../../types'

export function isBootsItemKey(key: string): key is BootsItemKey {
  return key in BootsItemNames
}
