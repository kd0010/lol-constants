export type ChampionRelationType =
  | 'Ally'
  | 'Enemy'

export type Role =
  | 'NONE'
  | 'SOLO'
  | 'CARRY'
  | 'SUPPORT'

export type Queue =
  | 'RANKED_SOLO_5x5'
  | 'RANKED_FLEX_SR'

export type LeaguesTier =
  | 'CHALLENGER'
  | 'GRANDMASTER'
  | 'MASTER'
  | 'DIAMOND'
  | 'PLATINUM'
  | 'GOLD'
  | 'SILVER'
  | 'BRONZE'
  | 'IRON'

export type LeaguesRank =
  | 'I'
  | 'II'
  | 'III'
  | 'IV'

export type GameType =
  | 'CUSTOM_GAME'
  | 'TUTORIAL_GAME'
  | 'MATCHED_GAME'

export type GameMode =
  | 'CLASSIC'
  | 'ARAM'
  | 'TUTORIAL'
  | 'URF'
  | 'ONEFORALL'
  | 'KINGPORO'
  | 'GAMEMODEX'
  | 'ULTBOOK'

export type PlatformId =
  | 'BR1'
  | 'EUN1'
  | 'EUW1'
  | 'JP1'
  | 'KR'
  | 'LA1'
  | 'LA2'
  | 'NA1'
  | 'OC1'
  | 'TR1'
  | 'RU'

export type Region =
  | 'EUW'
  | 'EUNE'
  | 'NA'
  | 'KR'
  | 'JP'
  | 'OCE'
  | 'LAN'
  | 'LAS'
  | 'TR'
  | 'RU'
  | 'BR'

/**
 * 0 — Custom games
 * 400 — 5v5 Draft Pick games
 * 420 — 5v5 Ranked Solo games
 * 430 — 5v5 Blind Pick games
 * 440 — 5v5 Ranked Flex games
 * 450 — 5v5 ARAM games
 * 700 — Clash games
 * 900 — ARURF games
 * 920 — Legend of the Poro King games
 * 1020 — One for All games
 * 1090 — Teamfight Tactics games
 * 1100 — Ranked Teamfight Tactics games
 * 1110 — Teamfight Tactics Tutorial games
 * 1111 — Teamfight Tactics test games
 * 1300 — Nexus Blitz games
 * 1400 — Ultimate Spellbook games
 * 1900 — Pick URF games
 */
export type QueueId =
  | 0
  | 400
  | 420
  | 430
  | 440
  | 450
  | 700
  | 900
  | 920
  | 1020
  | 1090
  | 1100
  | 1110
  | 1111
  | 1300
  | 1400
  | 1900

/**
 * 11 — Summoner's Rift
 * 12 — Howling Abyss
 * 21 — Nexus Blitz
 * 22 — Convergence
 */
export type MapId =
  | 11
  | 12
  | 21
  | 22

export type TeamId =
  | 100
  | 200

export type ParticipantId =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10

export type WardType =
  | 'UNDEFINED'
  | 'YELLOW_TRINKET'
  | 'CONTROL_WARD'
