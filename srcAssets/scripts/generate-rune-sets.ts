import runesReforged from '../runesReforged.json'
import { StatRunesV2 } from '../StatRunesV2'
import { writeToTmpFile } from './Helpers/writeToTmpFile'

(async () => {
  const constant = 'RuneSets'
  const runeSets: {
    PrimaryTrees: {[runeTreeName: string]: {[runeId: string]: string}}
    SecondaryTrees: {[runeTreeName: string]: {[runeId: string]: string}},
    Keystones: {[runeId: string]: string},
    StatRunes: {[runeId: string]: string},
    RunesByHSet: {[runeTreeName: string]: {[hSetRow: string]: {[runeId: string]: string}}},
    StatRunesByHSet: {[hSetRow: string]: {[runeId: string]: string}},
  } = {
    PrimaryTrees: {},
    SecondaryTrees: {},
    Keystones: {},
    StatRunes: {},
    RunesByHSet: {},
    StatRunesByHSet: {},
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

        // Add to PrimaryTrees
        if (!(runeTreeName in runeSets.PrimaryTrees)) runeSets.PrimaryTrees[runeTreeName] = {}
        runeSets.PrimaryTrees[runeTreeName]![id] = runeName

        // Add to SecondaryTrees
        if (!(runeTreeName in runeSets.SecondaryTrees)) runeSets.SecondaryTrees[runeTreeName] = {}
        // But only if it isn't a keystone rune
        if (currentHSetIdx != keystoneHSetIdx) {
          runeSets.SecondaryTrees[runeTreeName]![id] = runeName
        }

        // Add to Keystones
        // But only if it is a keystone rune
        if (currentHSetIdx == keystoneHSetIdx) {
          runeSets.Keystones[id] = runeName
        }

        // Add to RunesByHSet
        if (!(runeTreeName in runeSets.RunesByHSet)) runeSets.RunesByHSet[runeTreeName] = {}
        if (!runeSets.RunesByHSet[runeTreeName]![currentHSetIdx]) runeSets.RunesByHSet[runeTreeName]![currentHSetIdx] = {}
        runeSets.RunesByHSet[runeTreeName]![currentHSetIdx]![id] = runeName
      }

      ++currentHSetIdx
    }
  }

  for (let hSetIdx in StatRunesV2) {
    const hSetRunes = StatRunesV2[hSetIdx as unknown as 0 | 1 | 2]
    for (let [statRuneId, statRuneName] of Object.entries(hSetRunes)) {
      // Keep track
      totalRuneAmt += 1

      // Add to StatRunes
      runeSets.StatRunes[statRuneId] = statRuneName

      // Add to StatRunesByHSet
      if (!(hSetIdx in runeSets.StatRunesByHSet)) runeSets.StatRunesByHSet[hSetIdx] = {}
      runeSets.StatRunesByHSet[hSetIdx]![statRuneId] = statRuneName
    }
  }

  // Write to file
  await writeToTmpFile(
    constant,
    {
      constName: 'PrimaryTrees',
      json: runeSets.PrimaryTrees,
    },
    {
      constName: 'SecondaryTrees',
      json: runeSets.SecondaryTrees,
    },
    {
      constName: 'Keystones',
      json: runeSets.Keystones,
    },
    {
      constName: 'StatRunes',
      json: runeSets.StatRunes,
    },
    {
      constName: 'All',
      json: {
        1: '...PrimaryTrees.Precision',
        2: '...PrimaryTrees.Domination',
        3: '...PrimaryTrees.Sorcery',
        4: '...PrimaryTrees.Resolve',
        5: '...PrimaryTrees.Inspiration',
        6: '...StatRunes',
      },
      keysToEscape: [1, 2, 3, 4, 5, 6],
    },
    {
      constName: 'RunesByHSet',
      json: runeSets.RunesByHSet,
    },
    {
      constName: 'StatRunesByHSet',
      json: runeSets.StatRunesByHSet,
    },
    {
      constName: constant,
      comment: `Contains all Rune IDs that are known to man in the game of League of Legends. Sorted by various useful categories. There are a total of ${totalRuneAmt} runes in the game.`,
      json: {
        'PrimaryTrees': 'PrimaryTrees',
        'SecondaryTrees': 'SecondaryTrees',
        'Keystones': 'Keystones',
        'StatRunes': 'StatRunes',
        'All': 'All',
        'RunesByHSet': 'RunesByHSet',
        'StatRunesByHSet': 'StatRunesByHSet',
      },
      keysToEscape: [
        'PrimaryTrees',
        'SecondaryTrees',
        'Keystones',
        'StatRunes',
        'All',
        'RunesByHSet',
        'StatRunesByHSet',
      ],
    },
  )
})()
