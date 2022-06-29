import { DDPaths } from '../../Constants/DDPaths'
import { RuneIconFileNames } from '../../Constants/Runes/RuneIconFileNames'
import { RuneName, RuneTreeName } from '../../types'
import { getRuneCategoryByRuneName } from './getRuneCategoryByRuneName'
import { isRuneTreeName } from './isRuneTreeName'
import { isStatRuneName } from './isStatRuneName'

/**
 * Bsaed on rune name,
 * returns a CDN URL for the icon of that rune.
 */
export function getRuneCDNURL(name: RuneName | RuneTreeName): string {
  // Choose the appropriate base path
  const base = isStatRuneName(name)
    ? DDPaths.STAT_RUNE_ICON_BASE
    : DDPaths.TREE_RUNE_ICON_BASE

  // Already sufficient enough response for a rune tree name
  if (isRuneTreeName(name)) return `${base}/${RuneIconFileNames[ name ]}.png`
  // And stat runes
  if (isStatRuneName(name)) return `${base}/${RuneIconFileNames[ name ]}.png`

  // Finish for tree rune names
  const category = getRuneCategoryByRuneName(name)
  // Remove spaces
  let runeTreeFolder = category.replaceAll(' ', '')
  let runeFolder = name.replaceAll(' ', '')

  return `${base}/${runeTreeFolder}/${runeFolder}/${RuneIconFileNames[ name ]}.png`
}
