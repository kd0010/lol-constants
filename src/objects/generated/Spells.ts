export const Spells = {1:{id:1,key:"SummonerBoost",name:"Cleanse"},3:{id:3,key:"SummonerExhaust",name:"Exhaust"},4:{id:4,key:"SummonerFlash",name:"Flash"},6:{id:6,key:"SummonerHaste",name:"Ghost"},7:{id:7,key:"SummonerHeal",name:"Heal"},11:{id:11,key:"SummonerSmite",name:"Smite"},12:{id:12,key:"SummonerTeleport",name:"Teleport"},13:{id:13,key:"SummonerMana",name:"Clarity"},14:{id:14,key:"SummonerDot",name:"Ignite"},21:{id:21,key:"SummonerBarrier",name:"Barrier"},30:{id:30,key:"SummonerPoroRecall",name:"To the King!"},31:{id:31,key:"SummonerPoroThrow",name:"Poro Toss"},32:{id:32,key:"SummonerSnowball",name:"Mark"},39:{id:39,key:"SummonerSnowURFSnowball_Mark",name:"Mark (Snow URF)"},54:{id:54,key:"Summoner_UltBookPlaceholder",name:"Placeholder"},55:{id:55,key:"Summoner_UltBookSmitePlaceholder",name:"Placeholder and Attack-Smite"},2201:{id:2201,key:"SummonerCherryHold",name:"Flee"},2202:{id:2202,key:"SummonerCherryFlash",name:"Flash (Arena)"}} as const

export const failsafeSpell = {id:-1,key:"",name:""} as const

export const spellKeys = {SummonerBarrier:21,SummonerBoost:1,SummonerCherryFlash:2202,SummonerCherryHold:2201,SummonerDot:14,SummonerExhaust:3,SummonerFlash:4,SummonerHaste:6,SummonerHeal:7,SummonerMana:13,SummonerPoroRecall:30,SummonerPoroThrow:31,SummonerSmite:11,SummonerSnowURFSnowball_Mark:39,SummonerSnowball:32,SummonerTeleport:12,Summoner_UltBookPlaceholder:54,Summoner_UltBookSmitePlaceholder:55} as const

export const spellNames = {Barrier:21,Cleanse:1,"Flash (Arena)":2202,Flee:2201,Ignite:14,Exhaust:3,Flash:4,Ghost:6,Heal:7,Clarity:13,"To the King!":30,"Poro Toss":31,Smite:11,"Mark (Snow URF)":39,Mark:32,Teleport:12,Placeholder:54,"Placeholder and Attack-Smite":55} as const

export const SpellsArr = Object.values(Spells)
export type SpellId = typeof SpellsArr[number]['id']
export type SpellKey = typeof SpellsArr[number]['key']
export type SpellName = typeof SpellsArr[number]['name']
