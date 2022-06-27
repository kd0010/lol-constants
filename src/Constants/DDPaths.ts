const VERSION = '12.12.1'
const BASE = `http://ddragon.leagueoflegends.com/cdn/${VERSION}`

/**
 * DataDragon CDN Paths.
 * All paths end with '/'.
 */
export const DDPaths = {
  CHAMPION_ICON_BASE: `${BASE}/img/champion/`,
  SPELL_ICON_BASE: `${BASE}/img/spell/`,
  PROFILE_ICON_BASE: `${BASE}/img/profileicon/`,
  ITEM_ICON_BASE: `${BASE}/img/item/`,
} as const
