module.exports = {
  extends: ['universe/native', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 100,
        tabWidth: 2,
        singleQuote: true,
        bracketSameLine: true,
        trailingComma: 'none'
      }
    ]
  }
};
