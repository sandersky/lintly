const ERROR = 'error'

module.exports = {
  extends: 'standard',
  globals: {
    afterAll: false,
    afterEach: false,
    beforeAll: false,
    beforeEach: false,
    describe: false,
    expect: false,
    fetch: false,
    it: false,
    jest: false,
  },
  overrides: [
    {
      excludedFiles: ['**/__mocks__/**/*.js', '**/__tests__/**/*.js'],
      files: ['**/*.js'],
      rules: {
        'flowtype/no-weak-types': [ERROR],
        'flowtype/require-parameter-type': [ERROR],
      },
    },
  ],
  parser: 'babel-eslint',
  plugins: ['flowtype', 'prettier'],
  rules: {
    'comma-dangle': [ERROR, 'always-multiline'],

    // Deveating from standard to satisfy prettier
    'space-before-function-paren': [0],

    // Disabling this for now b/c it expects imports before jest.mock calls
    'import/first': [0],

    // Making prettier comply with standard as much as possible
    'prettier/prettier': [
      ERROR,
      {
        bracketSpacing: false,
        semi: false,
        singleQuote: true,
        trailingComma: 'all',
      },
    ],

    // Make sure imported components aren't marked as unsed variables when they
    // are used in JSX.
    'react/jsx-uses-vars': [ERROR],
  },
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: false,
    },
  },
}
