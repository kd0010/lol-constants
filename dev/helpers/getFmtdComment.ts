/**
 * Returns a JavaScript-formatted comment,
 * the kind you put on top of functions, for example.
 */
export function getFmtdComment(
  comment: string,
): string {
  let st = ''

  st += '/**\n'
  st += ' * ' + comment + '\n'
  st += ' */'

  return st
}
