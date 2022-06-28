import { PrimaryTrees } from '../../Constants/Runes/RuneSets'
import { ResolveTreeRuneId } from '../../types'

export function isResolveTreeRuneId(id: string): id is ResolveTreeRuneId {
  return id in PrimaryTrees.Resolve
}
