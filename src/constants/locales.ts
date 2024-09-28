export const Locales = {
  /** Czech (Czech Republic) */
  'cs_CZ': 'cs_CZ',
  /** Greek (Greece) */
  'el_GR': 'el_GR',
  /** Polish (Poland) */
  'pl_PL': 'pl_PL',
  /** Romanian (Romania) */
  'ro_RO': 'ro_RO',
  /** Hungarian (Hungary) */
  'hu_HU': 'hu_HU',
  /** English (United Kingdom) */
  'en_GB': 'en_GB',
  /** German (Germany) */
  'de_DE': 'de_DE',
  /** Spanish (Spain) */
  'es_ES': 'es_ES',
  /** Italian (Italy) */
  'it_IT': 'it_IT',
  /** French (France) */
  'fr_FR': 'fr_FR',
  /** Japanese (Japan) */
  'ja_JP': 'ja_JP',
  /** Korean (Korea) */
  'ko_KR': 'ko_KR',
  /** Spanish (Mexico) */
  'es_MX': 'es_MX',
  /** Spanish (Argentina) */
  'es_AR': 'es_AR',
  /** Portuguese (Brazil) */
  'pt_BR': 'pt_BR',
  /** English (United States) */
  'en_US': 'en_US',
  /** English (Australia) */
  'en_AU': 'en_AU',
  /** Russian (Russia) */
  'ru_RU': 'ru_RU',
  /** Turkish (Turkey) */
  'tr_TR': 'tr_TR',
  /** Malay (Malaysia) */
  'ms_MY': 'ms_MY',
  /** English (Republic of the Philippines) */
  'en_PH': 'en_PH',
  /** English (Singapore) */
  'en_SG': 'en_SG',
  /** Thai (Thailand) */
  'th_TH': 'th_TH',
  /** Vietnamese (Viet Nam) */
  'vi_VN': 'vi_VN',
  /** Indonesian (Indonesia) */
  'id_ID': 'id_ID',
  /** Chinese (Malaysia) */
  'zh_MY': 'zh_MY',
  /** Chinese (China) */
  'zh_CN': 'zh_CN',
  /** Chinese (Taiwan) */
  'zh_TW': 'zh_TW',
} as const

export type Locale = typeof Locales[keyof typeof Locales]

export function isLocale(locale: string | null | undefined): locale is Locale {
  return typeof locale == 'string' && locale in Locales
}
