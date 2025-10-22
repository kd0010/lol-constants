import {
  ChampionId,
  ChampionKey,
  championKeys,
  ChampionName,
  championNames,
  Champions,
  failsafeChampion,
} from '../objects/generated/Champions'

/** Get a champion by its **id**, **key**, or **name**. */
export function getChampion(id_key_name: ChampionId | ChampionKey | ChampionName): typeof Champions[keyof typeof Champions] {
  if (typeof id_key_name == 'number') return Champions[id_key_name] ?? failsafeChampion
  if (isChampionKey(id_key_name)) return Champions[championKeys[id_key_name]] ?? failsafeChampion
  return Champions[championNames[id_key_name]] ?? failsafeChampion
}

export function isChampionId(id: number | null | undefined): id is ChampionId {
  return typeof id == 'number' && id in Champions
}

export function isChampionKey(key: string | null | undefined): key is ChampionKey {
  return typeof key == 'string' && key in championKeys
}

export function isChampionName(name: string | null | undefined): name is ChampionName {
  return typeof name == 'string' && name in championNames
}

export function isChampion(id_key_name: number | string | null | undefined): id_key_name is ChampionId | ChampionKey | ChampionName {
  return typeof id_key_name == 'number' ? isChampionId(id_key_name) : (isChampionKey(id_key_name) || isChampionName(id_key_name))
}
