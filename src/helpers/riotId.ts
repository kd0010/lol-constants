const MAX_RIOT_GAMENAME_CHAR_COUNT = 16 as const
const MAX_RIOT_TAGLINE_CHAR_COUNT = 5 as const

/** E.g. `Faker#T1` ⇒ `{gameName: 'Faker', tagLine: 'T1'}` */
export function splitRiotId(
  riotId: string,
  /** @default '#' */
  splitChar: string = '#',
): RiotId {
  const split = riotId.split(splitChar)
  let gameName = split[0] ?? ''
  let tagLine = split[1] ?? ''

  if (tagLine.includes(splitChar)) tagLine = ''

  return {
    gameName,
    tagLine,
  }
}

/** Default `splitChar` is "#".  */
export function makeRiotId(
  riotId: RiotId,
  /** @default '#' */
  splitChar: string = '#',
) {
  return riotId.gameName + splitChar + riotId.tagLine
}

/** Default `splitChar` is "#".  */
export function validateRiotId(
  riotId: string,
  /** @default '#' */
  splitChar: string = '#',
): boolean {
  const id = splitRiotId(riotId, splitChar)
  if (id.gameName == '' || id.gameName.length > MAX_RIOT_GAMENAME_CHAR_COUNT) return false
  if (id.tagLine == '' || id.tagLine.length > MAX_RIOT_TAGLINE_CHAR_COUNT) return false
  return true
}

export type RiotId = {
  gameName: string
  tagLine: string
}
