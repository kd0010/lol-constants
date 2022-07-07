import { BootsItemKeys } from '../../Constants/Items/BootsItemKeys'
import { BootsItemName } from '../../types'

export function isBootsItemName(name: any): name is BootsItemName {
  return name in BootsItemKeys
}
