module.exports = {
  parser: 'babel-eslint',
  plugins: ['standard', 'prettier'],
  extends: ['standard', 'prettier', 'plugin:import/errors'],
  rules: {
    'prettier/prettier': [
      2,
      {
        trailingComma: 'none',
        singleQuote: true,
        semi: false
      }
    ],
    'prefer-arrow-callback': 2,
    'prefer-const': 2,
    'standard/computed-property-even-spacing': 0,
    'no-process-env': 0,
    'no-unused-vars': [
      2,
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_'
      }
    ]
  }
}
