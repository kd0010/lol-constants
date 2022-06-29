import { All } from './src/Constants/Runes/RuneSetsByRuneNames'
import { RuneTreeIds } from './src/Constants/Runes/RuneTreeIds'
import { getRuneCDNURL } from './src/Helpers/Runes/getRuneCDNURL'

const root = document.getElementById('root')!

const pasteRunesOntoScreen = (runesObject) => {
  let runeName: any
  for (runeName in runesObject) {
    let src = getRuneCDNURL(runeName)
  
    const title = document.createElement('p')
    const img = document.createElement('img')
  
    title.innerHTML = runeName
    img.src = src
  
    root.appendChild(title)
    root.appendChild(img)
  }
}

pasteRunesOntoScreen(All)
pasteRunesOntoScreen(RuneTreeIds)
