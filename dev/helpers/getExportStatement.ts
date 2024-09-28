import {enableEscapedValues} from './enableEscapedValues'
import {expStringifyObject} from './expStringifyObject'
import {getFmtdComment} from './getFmtdComment'

/**
 * Wraps the provided JSON in a TS export-as-const statement.
 */
export function getExportStatement(
  constName: string,
  json: {
    [k: string]: any
  },
  keysToEscape?: (string | number)[],
  comment?: string,
  typeName?: string,
  typeComment?: string,
  includeAutoTypeName?: boolean,
  rawInputForTypes?: string,
  customTypeAnnotation?: string,
  expUseCustomStringify?: boolean,
): string {
  let contents = ''

  expUseCustomStringify = true // override for all, right now like this

  const auditNewLineChar = (
    endingSt: string,
    startingSt: string,
  ): string => {
    if (
      endingSt.at(-1) != '\n' &&
      startingSt.at(0) != '\n'
    ) {
      endingSt += '\n'
    }
    return endingSt
  }

  const stringifiedJson = keysToEscape
    ? enableEscapedValues(json, keysToEscape)
    : expUseCustomStringify
      ? expStringifyObject(json)
      : JSON.stringify(json)

  if (comment) {
    contents += getFmtdComment(comment)
    contents += '\n'
  }

  let custTypeAnot = customTypeAnnotation ? `: ${customTypeAnnotation}` : ''
  contents += `export const ${constName}${custTypeAnot} = ${stringifiedJson} as const`

  if (typeComment) {
    contents = auditNewLineChar(contents, typeComment)
    if (typeComment.includes('/**')) contents += typeComment
    else contents += getFmtdComment(typeComment)
  }

  if (typeName || includeAutoTypeName) {
    contents = auditNewLineChar(contents, '')
    if (includeAutoTypeName) typeName = constName.slice(0, -1)
    contents += `export type ${typeName} = typeof ${constName}[keyof typeof ${constName}]`
  }

  if (rawInputForTypes) {
    contents += rawInputForTypes
  }

  return contents
}
