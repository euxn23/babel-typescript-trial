# This is trial of @babel/preset-typescript
## Summary
- `@babel/preset-typescript` provides only compiling role, not includes type-check.
    - To check type, use `tsc` with `--noEmit` option.
    - If you are using IDE/Editor support, type error would be found at coding time.
- `eslint` is working with `babel-parser`
    - `typescript-eslint-parser`, has any difficulties, would not be needed.

## Try it
### compile
- `$ npm run build`: successfully compiled.

### lint
- `$ npm run lint`: successfully linted.

### type check
- `$ npm run type:check`: successfully checked.
