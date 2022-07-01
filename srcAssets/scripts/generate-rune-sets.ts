import runesReforged from '../runesReforged.json'
import { StatRunesV2 } from '../StatRunesV2'
import { writeToTmpFile } from './Helpers/writeToTmpFile'

(async () => {
  const constant = 'RuneSets'
  const runeSets: {
    PrimaryRuneTrees: {[runeTreeName: string]: {[runeId: string]: string}}
    SecondaryRuneTrees: {[runeTreeName: string]: {[runeId: string]: string}},
    KeystoneNames: {[runeId: string]: string},
    StatRuneNames: {[runeId: string]: string},
    RuneTreeHSets: {[runeTreeName: string]: {[hSetRow: string]: {[runeId: string]: string}}},
    StatRuneHSets: {[hSetRow: string]: {[runeId: string]: string}},
  } = {
    PrimaryRuneTrees: {},
    SecondaryRuneTrees: {},
    KeystoneNames: {},
    StatRuneNames: {},
    RuneTreeHSets: {},
    StatRuneHSets: {},
  }

  const keystoneHSetIdx = 0
  let totalRuneAmt = 0

  for (const runeTree of runesReforged) {
    const runeTreeName = runeTree.name
    const horizontalSets = runeTree.slots
    let currentHSetIdx = 0
    for (const {
      runes,
    } of horizontalSets) {
      for (let {
        id,
        name: runeName,
      } of runes) {
        totalRuneAmt += 1

        // Add to PrimaryRuneTrees
        if (!(runeTreeName in runeSets.PrimaryRuneTrees)) runeSets.PrimaryRuneTrees[runeTreeName] = {}
        runeSets.PrimaryRuneTrees[runeTreeName]![id] = runeName

        // Add to SecondaryRuneTrees
        if (!(runeTreeName in runeSets.SecondaryRuneTrees)) runeSets.SecondaryRuneTrees[runeTreeName] = {}
        // But only if it isn't a keystone rune
        if (currentHSetIdx != keystoneHSetIdx) {
          runeSets.SecondaryRuneTrees[runeTreeName]![id] = runeName
        }

        // Add to KeystoneNames
        // But only if it is a keystone rune
        if (currentHSetIdx == keystoneHSetIdx) {
          runeSets.KeystoneNames[id] = runeName
        }

        // Add to RuneTreeHSets
        if (!(runeTreeName in runeSets.RuneTreeHSets)) runeSets.RuneTreeHSets[runeTreeName] = {}
        if (!runeSets.RuneTreeHSets[runeTreeName]![currentHSetIdx]) runeSets.RuneTreeHSets[runeTreeName]![currentHSetIdx] = {}
        runeSets.RuneTreeHSets[runeTreeName]![currentHSetIdx]![id] = runeName
      }

      ++currentHSetIdx
    }
  }

  for (let hSetIdx in StatRunesV2) {
    const hSetRunes = StatRunesV2[hSetIdx as unknown as 0 | 1 | 2]
    for (let [statRuneId, statRuneName] of Object.entries(hSetRunes)) {
      // Keep track
      totalRuneAmt += 1

      // Add to StatRuneNames
      runeSets.StatRuneNames[statRuneId] = statRuneName

      // Add to StatRuneHSets
      if (!(hSetIdx in runeSets.StatRuneHSets)) runeSets.StatRuneHSets[hSetIdx] = {}
      runeSets.StatRuneHSets[hSetIdx]![statRuneId] = statRuneName
    }
  }

  // Write to file
  await writeToTmpFile(
    constant,
    {
      constName: 'PrimaryRuneTrees',
      json: runeSets.PrimaryRuneTrees,
    },
    {
      constName: 'SecondaryRuneTrees',
      json: runeSets.SecondaryRuneTrees,
    },
    {
      constName: 'KeystoneNames',
      json: runeSets.KeystoneNames,
    },
    {
      constName: 'StatRuneNames',
      json: runeSets.StatRuneNames,
    },
    {
      constName: 'RuneNames',
      json: {
        1: '...PrimaryRuneTrees.Precision',
        2: '...PrimaryRuneTrees.Domination',
        3: '...PrimaryRuneTrees.Sorcery',
        4: '...PrimaryRuneTrees.Resolve',
        5: '...PrimaryRuneTrees.Inspiration',
        6: '...StatRuneNames',
      },
      keysToEscape: [1, 2, 3, 4, 5, 6],
    },
    {
      constName: 'RuneTreeHSets',
      json: runeSets.RuneTreeHSets,
    },
    {
      constName: 'StatRuneHSets',
      json: runeSets.StatRuneHSets,
    },
    {
      constName: constant,
      comment: `Contains all Rune IDs that are known to man in the game of League of Legends. Sorted by various useful categories. There are a total of ${totalRuneAmt} runes in the game.`,
      json: {
        'PrimaryRuneTrees': 'PrimaryRuneTrees',
        'SecondaryRuneTrees': 'SecondaryRuneTrees',
        'KeystoneNames': 'KeystoneNames',
        'StatRuneNames': 'StatRuneNames',
        'RuneNames': 'RuneNames',
        'RuneTreeHSets': 'RuneTreeHSets',
        'StatRuneHSets': 'StatRuneHSets',
      },
      keysToEscape: [
        'PrimaryRuneTrees',
        'SecondaryRuneTrees',
        'KeystoneNames',
        'StatRuneNames',
        'RuneNames',
        'RuneTreeHSets',
        'StatRuneHSets',
      ],
    },
  )
})()
