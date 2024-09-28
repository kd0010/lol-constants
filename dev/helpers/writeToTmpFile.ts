import {writeFile} from 'fs'
import {getExportStatement} from './getExportStatement'

export function writeToTmpFile(
  mainConstName: string,
  ...constants: {
    constName: string
    comment?: string
    json: {
      [k: string]: any
    }
    typeName?: string
    typeComment?: string
    validationFnName?: string
    validationFnComment?: string
    includeAutoTypeName?: boolean
    keysToEscape?: (string | number)[]
    rawInput?: string
    rawInputForTypes?: string
    customTypeAnnotation?: string
    expUseCustomStringify?: boolean
  }[]
): Promise<void> {
  return new Promise((res, rej) => {
    const exportStatements = constants.reduce((
      finalSt,
      {
        constName,
        comment,
        json,
        keysToEscape,
        typeName,
        typeComment,
        validationFnName,
        validationFnComment,
        includeAutoTypeName,
        rawInput,
        rawInputForTypes,
        customTypeAnnotation,
        expUseCustomStringify,
      },
      i,
    ) => {
      let exportStatement = rawInput ?? getExportStatement(
        constName,
        json,
        keysToEscape,
        comment,
        typeName,
        typeComment,
        includeAutoTypeName,
        rawInputForTypes,
        customTypeAnnotation,
        expUseCustomStringify,
      )
      return (
        finalSt
        + exportStatement
        // On last statement, provide only a single empty ending line
        + (i + 1 == constants.length ? '\n' : '\n\n')
      )
    }, '')

    writeFile(
      `src/objects/generated/${mainConstName}.ts`,
      exportStatements,
      err => {
        if (err) rej(err)
        res()
      },
    )
  })
}
