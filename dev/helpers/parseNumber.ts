export function parseNumber(
  value: any,
  debugVariableLabel: string,
): number {
  let num = parseInt(value, 10)
  if (Number.isNaN(num)) throw `${debugVariableLabel} was NaN`
  return num
}
