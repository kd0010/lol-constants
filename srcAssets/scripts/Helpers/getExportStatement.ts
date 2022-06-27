/**
 * Wraps the provided JSON in a TS export-as-const statement.
 */
export function getExportStatement(
  constName: string,
  json: {
    [k: string]: any
  },
): string {
  return `export const ${constName} = ${JSON.stringify(json)} as const`
}
