# Adding a new constant
1. create constant object, its type, type validation fn
2. exports in `index.ts` and `lol.ts`

# Adding a new object
1. create object, its value array, type, type validation fn, getter function
2. exports in `index.ts` and `lol.ts`

# Updating to new patch
1. Read patch notes and note to self what has been updated, make alterations wherever needed
2. Set new patch version in `src/Patch`
3. `pnpm run patch:update`
---
1. `pnpm run build`
2. version
3. commit
4. `pnpm publish`
