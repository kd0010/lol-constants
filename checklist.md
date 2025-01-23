# Adding a new constant
1. create constant object, its type, type validation fn
2. exports in `index.ts` and `lol.ts`

# Adding a new object
1. create object, its value array, type, type validation fn, getter function
2. exports in `index.ts` and `lol.ts`

# Updating to new patch
1. Update based on patch notes
   - Check `dev/constants/*`
   - Check `src/constants/*`
   - Check `src/enums/*`
   - Check `src/objects/*`
2. Set new patch version in `src/Patch`
3. `pnpm run patch:update`
---
1. version
2. commit
3. `pnpm publish`
