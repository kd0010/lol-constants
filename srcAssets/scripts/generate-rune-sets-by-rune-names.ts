import runesReforged from '../runesReforged.json'
import { StatRunes } from '../StatRunes'
import { writeToTmpFile } from './Helpers/writeToTmpFile'

(async () => {
  const constant = 'RuneSetsByRuneNames'
  const runeSets: {
    // Rune keys map onto Rune names
    PrimaryTrees: {[runeTreeName: string]: {[runeName: string]: string}}
    SecondaryTrees: {[runeTreeName: string]: {[runeName: string]: string}},
    Keystones: {[runeName: string]: string},
    StatRunes: {[runeName: string]: string},
  } = {
    PrimaryTrees: {},
    SecondaryTrees: {},
    Keystones: {},
    StatRunes: {},
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
        runeSets.PrimaryTrees[runeTreeName]![runeName] = String(id)

        // Add to SecondaryTrees
        if (!(runeTreeName in runeSets.SecondaryTrees)) runeSets.SecondaryTrees[runeTreeName] = {}
        // But only if it isn't a keystone rune
        if (currentHSetIdx != keystoneHSetIdx) {
          runeSets.SecondaryTrees[runeTreeName]![runeName] = String(id)
        }

        // Add to Keystones
        // But only if it is a keystone rune
        if (currentHSetIdx == keystoneHSetIdx) {
          runeSets.Keystones[runeName] = String(id)
        }
      }

      ++currentHSetIdx
    }
  }

  let statRuneId: keyof typeof StatRunes
  for (statRuneId in StatRunes) {
    totalRuneAmt += 1

    // Add to StatRunes
    runeSets.StatRunes[StatRunes[ statRuneId ]] = statRuneId
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
      keysToSpread: [1, 2, 3, 4, 5, 6],
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
      },
      keysToSpread: [
        'PrimaryTrees',
        'SecondaryTrees',
        'Keystones',
        'StatRunes',
        'All',
      ],
    },
  )
})()
