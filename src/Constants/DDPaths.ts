const version = '12.12.1'
const base = `https://ddragon.leagueoflegends.com/cdn/${version}`
const cdragonVersion = '12.12'
const cdragonBase = `https://raw.communitydragon.org/${cdragonVersion}`

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
  ABILITY_ICON_BASE: `${base}/img/spell`,
  /**
   * Append with `/685.png` (`/{iconId}.png`).
   */
  PROFILE_ICON_BASE: `${base}/img/profileicon`,
  /**
   * Append with `/1001.png` (`/{itemId}.png`).
   */
  ITEM_ICON_BASE: `${base}/img/item`,
  /**
   * @see https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/statmods/
   */
  STAT_RUNE_ICON_BASE: `${cdragonBase}/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/statmods`,
  /**
   * @see https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/
   */
  TREE_RUNE_ICON_BASE: `${cdragonBase}/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles`,
} as const
