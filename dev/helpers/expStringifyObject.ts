export function expStringifyObject(
  object: Object,
  {}: Options={},
): string {
  const isArray = Array.isArray(object)

  let out = ''
  if (isArray) out = '['
  else out = '{'

  let isFirstKey = true
  for (let key in object) {
    if (!isFirstKey) out += ','
    isFirstKey = false

    let val = object[key]

    // There's only some exceptions in which a key
    // needs to be surrounded by quotation marks.
    let surroundKeyWithQuotationMarks = false
    if (key.at(0)?.match(/[0-9]/g) && key.match(/[^0-9]+/g)) surroundKeyWithQuotationMarks = true
    if (key.includes('\'')) surroundKeyWithQuotationMarks = true
    if (key.includes(' ')) surroundKeyWithQuotationMarks = true
    if (key.includes('(') || key.includes(')')) surroundKeyWithQuotationMarks = true
    if (key.includes('[') || key.includes(']')) surroundKeyWithQuotationMarks = true
    if (key.includes('?')) surroundKeyWithQuotationMarks = true
    if (key.includes('!')) surroundKeyWithQuotationMarks = true
    if (key.includes('.')) surroundKeyWithQuotationMarks = true
    if (key.includes('-')) surroundKeyWithQuotationMarks = true

    let finalKey = key
    if (surroundKeyWithQuotationMarks) finalKey = `"${finalKey}"`

    if (!isArray) out += finalKey + ':'

    switch (typeof val) {
      case 'string':
        out += `"${val}"`
        break
      case 'number':
      case 'boolean':
        out += val
        break
      case 'object':
        out += expStringifyObject(val as Object)
        break
      default:
        throw `Unaccounted for \`val\`: ${val} (type: ${typeof val})`
    }
  }

  if (isArray) out += ']'
  else out += '}'

  return out
}

type Object =
  | {[key: string]: string | number | boolean | Object}
  | {[key: number]: string | number | boolean | Object}

interface Options {}
