const version = '12.12.1'
const base = `https://ddragon.leagueoflegends.com/cdn/${version}`

/**
 * DataDragon CDN Paths.
 */
export const DDPaths = {
  /**
   * Append with `/MonkeyKing.png` (`/{championId}.png`).
   */
  CHAMPION_ICON_BASE: `${base}/img/champion`,
  /**
   * Append with `/MonkeyKing_0.png` (`/{championId}_{skinNum}.png`).
   */
  CHAMPION_LOADING_BASE: `${base}/img/champion/loading`,
  /**
   * Append with `/MonkeyKing_0.png` (`/{championId}_{skinNum}.png`).
   */
  CHAMPION_SPLASH_BASE: `${base}/img/champion/splash`,
  /**
   * Append with `/FlashFrost.png` (`/{abilityKey}.png`).
   */
  SPELL_ICON_BASE: `${base}/img/spell`,
  /**
   * Append with `/685.png` (`/{iconId}.png`).
   */
  PROFILE_ICON_BASE: `${base}/img/profileicon`,
  /**
   * Append with `/1001.png` (`/{itemId}.png`).
   */
  ITEM_ICON_BASE: `${base}/img/item`,
} as const
