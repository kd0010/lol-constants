import { writeFile } from 'fs'
import { getExportStatement } from './getExportStatement'

export function writeToTmpFile(
  mainConstName: string,
  ...constants: {
    constName: string
    comment?: string
    json: {
      [k: string]: any
    }
    keysToSpread?: (string | number)[]
  }[]
): Promise<void> {
  return new Promise((res, rej) => {
    const exportStatements = constants.reduce((
      finalSt,
      {
        constName,
        comment,
        json,
        keysToSpread,
      },
      i,
    ) => {
      let exportStatement = getExportStatement(constName, json, keysToSpread, comment)
      return (
        finalSt
          + exportStatement
          // On last statement, provide only a single empty ending line
          + (i + 1 == constants.length ? '\n' : '\n\n')
      )
    }, '')

    writeFile(
      `tmp/${mainConstName}.ts`,
      exportStatements,
      err => {
        if (err) rej(err)
        res()
      },
    )
  })
}
