import { Keystones } from '../../Constants/Runes/RuneSets'
import { KeystoneRuneId } from '../../types'

export function isKeystoneRuneId(id: string): id is KeystoneRuneId {
  return id in Keystones
}
