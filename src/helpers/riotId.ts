const maxRiotGameNameCharCount = 16 as const
const maxRiotTaglineCharCount = 5 as const

/** E.g. `Faker#T1` ⇒ `{name: 'Faker', tag: 'T1'}` */
export function splitRiotId(
  riotId: string,
  /** @default '#' */
  splitChar: string = '#',
): RiotId {
  const split = riotId.split(splitChar)
  let name = split[0] ?? ''
  let tag = split[1] ?? ''

  if (tag.includes(splitChar)) tag = ''

  return {
    name,
    tag,
  }
}

/** Default `splitChar` is "#".  */
export function makeRiotId(
  riotId: RiotId,
  /** @default '#' */
  splitChar: string = '#',
) {
  return riotId.name + splitChar + riotId.tag
}

/** Default `splitChar` is "#".  */
export function validateRiotId(
  riotId: string,
  /** @default '#' */
  splitChar: string = '#',
): boolean {
  const id = splitRiotId(riotId, splitChar)
  if (id.name == '' || id.name.length > maxRiotGameNameCharCount) return false
  if (id.tag == '' || id.tag.length > maxRiotTaglineCharCount) return false
  return true
}

export type RiotId = {
  name: string
  tag: string
}
