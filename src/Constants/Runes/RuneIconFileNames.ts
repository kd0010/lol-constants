import { RuneName, RuneTreeName } from '../../types'

/**
 * The file names themselves of runes,
 * according to https://raw.communitydragon.org.
 * The file names are excluding the extension (``).
 * 
 * @see https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/statmods/
 * @see https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/
 */
export const RuneIconFileNames: {
  [k in (RuneName | RuneTreeName)]: string
} = {
  // ## Rune Trees
  'Precision': '7201_precision',
  'Domination': '7200_domination',
  'Sorcery': '7202_sorcery',
  'Resolve': '7204_resolve',
  'Inspiration': '7203_whimsy',
  // ## Tree Runes
  // ### Precision
  'Conqueror': 'conqueror',
  'Coup de Grace': 'coupdegrace',
  'Cut Down': 'cutdown',
  'Fleet Footwork': 'fleetfootwork',
  'Legend: Alacrity': 'legendalacrity',
  'Legend: Bloodline': 'legendbloodline',
  'Legend: Tenacity': 'legendtenacity',
  'Lethal Tempo': 'lethaltempotemp',
  'Presence of Mind': 'presenceofmind',
  'Press the Attack': 'presstheattack',
  'Overheal': 'overheal',
  'Triumph': 'triumph',
  // ### Domination
  'Cheap Shot': 'cheapshot',
  'Dark Harvest': 'darkharvest',
  'Electrocute': 'electrocute',
  'Eyeball Collection': 'eyeballcollection',
  'Ghost Poro': 'ghostporo',
  'Hail of Blades': 'hailofblades',
  'Ingenious Hunter': 'ingenioushunter',
  'Predator': 'predator',
  'Relentless Hunter': 'relentlesshunter',
  'Sudden Impact': 'suddenimpact',
  'Taste of Blood': 'greenterror_tasteofblood',
  'Treasure Hunter': 'treasurehunter',
  'Ultimate Hunter': 'ultimatehunter',
  'Zombie Ward': 'zombieward',
  // ### Sorcery
  'Absolute Focus': 'absolutefocus',
  'Arcane Comet': 'arcanecomet',
  'Celerity': 'celeritytemp',
  'Gathering Storm': 'gatheringstorm',
  'Last Stand': 'laststand',
  'Manaflow Band': 'manaflowband',
  'Nimbus Cloak': '6361',
  'Nullifying Orb': 'pokeshield',
  'Phase Rush': 'phaserush',
  'Scorch': 'scorch',
  'Summon Aery': 'summonaery',
  'Transcendence': 'transcendence',
  'Unflinching': 'unflinching',
  'Waterwalking': 'waterwalking',
  // ### Resolve
  'Approach Velocity': 'approachvelocity',
  'Bone Plating': 'boneplating',
  'Conditioning': 'conditioning',
  'Demolish': 'demolish',
  'Font of Life': 'fontoflife',
  'Grasp of the Undying': 'graspoftheundying',
  'Guardian': 'guardian',
  'Shield Bash': 'mirrorshell',
  'Overgrowth': 'overgrowth',
  'Revitalize': 'revitalize',
  'Second Wind': 'secondwind',
  'Aftershock': 'veteranaftershock',
  // ### Inspiration
  'Magical Footwear': 'magicalfootwear',
  'Minion Dematerializer': 'miniondematerializer',
  'Perfect Timing': 'perfecttiming',
  'Time Warp Tonic': 'timewarptonic',
  'Unsealed Spellbook': 'unsealedspellbook',
  'Biscuit Delivery': 'biscuitdelivery',
  'Cosmic Insight': 'cosmicinsight',
  'First Strike': 'firststrike',
  'Future\'s Market': 'futuresmarket',
  'Glacial Augment': 'glacialaugment',
  'Hextech Flashtraption': 'hextechflashtraption',
  // ## Stat Runes
  // ###
  'Offense (AF)': 'statmodsadaptiveforceicon',
  'Offense (AS)': 'statmodsattackspeedicon',
  'Offense (AH)': 'statmodscdrscalingicon',
  // ###
  'Flex (AF)': 'statmodsadaptiveforceicon',
  'Flex (AR)': 'statmodsarmoricon',
  'Flex (MR)': 'statmodsmagicresicon.magicresist_fix',
  // ###
  'Defense (HP)': 'statmodshealthscalingicon',
  'Defense (AR)': 'statmodsarmoricon',
  'Defense (MR)': 'statmodsmagicresicon.magicresist_fix',
} as const
