/**
 * Basically a modified `JSON.stringify()` function.
 * 
 * Assumes that what you're trying to do is simply "escape" the value
 * of a key in `keysToSpread`, clearing it away from:
 * -  its own key and its 2 quotation marks `"` and its colon `:`,
 * -  the 2 quotation marks `"` around the value.
 * 
 * This way enabling the spreading of a Constant into the end object.
 * Example:
 * `{"key":"...ConstantValue"} => {...ConstantValue}`
 */
export function enableEscapedValues(
  obj: {
    [k: string]: any
  },
  keysToEscape: (string | number)[],
): string {
  let json = JSON.stringify(obj)

  for (let key of keysToEscape) {
    const stringifiedKey = `"${key}":`
    let stKeyIdx: number = json.indexOf(stringifiedKey)

    // Skip if for whatever reason not found
    if (stKeyIdx == -1) continue

    // Remove the key with its 2 quotation marks and colon
    json =
      json.slice(0, stKeyIdx)
      + json.slice(stKeyIdx + stringifiedKey.length)
    
    // Remove the next 2 quotation marks for supposed spread value
    for (let i = 0; i < 2; ++i) {
      const idxToRemove = json.indexOf('"', stKeyIdx)
      json =
        json.slice(0, idxToRemove)
        + json.slice(idxToRemove + 1)
    }
  }

  return json
}
