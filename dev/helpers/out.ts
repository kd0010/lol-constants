import {writeFileSync} from 'fs'

export function out(
  data: any,
  title: string='out',
) {
  writeFileSync(`./dev/tmp/${title}.json`, JSON.stringify(data), {encoding: 'utf-8'})
}
