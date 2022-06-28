import { enableSpreadValues } from './enableSpreadValues'
import { getFmtdComment } from './getFmtdComment'

/**
 * Wraps the provided JSON in a TS export-as-const statement.
 */
export function getExportStatement(
  constName: string,
  json: {
    [k: string]: any
  },
  keysToSpread?: (string | number)[],
  comment?: string,
): string {
  const stringifiedJson = keysToSpread
    ? enableSpreadValues(json, keysToSpread)
    : JSON.stringify(json)
  
  const fmtdComment = comment ? getFmtdComment(comment) : ''
  
  return fmtdComment + `export const ${constName} = ${stringifiedJson} as const`
}
