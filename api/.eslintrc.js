module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  extends: ['eslint:recommended', 'plugin:import/recommended', 'plugin:prettier/recommended', 'plugin:@typescript-eslint/recommended', 'prettier/@typescript-eslint'],
  plugins: ['simple-import-sort', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-empty-function': ['error', { allow: ['arrowFunctions'] }],
    '@typescript-eslint/no-use-before-define': ['warn', { functions: false, classes: true, variables: true }],
    curly: 'warn',
    camelcase: 'off',
    'import/extensions': ['error', 'never', { json: 'always' }],
    'import/named': 'off',
    'import/namespace': 'off',
    'import/no-cycle': 'error',
    'import/no-unresolved': ['error', { ignore: ['@env'] }],
    'import/no-extraneous-dependencies': 'error',
    'import/order': 'off',
    'linebreak-style': ['error', 'unix'],
    'newline-before-return': 'error',
    'no-console': 'off',
    'simple-import-sort/sort': 'error',
    'sort-imports': 'off',
    'no-useless-catch': 'off',
    strict: ['error', 'global'],
  },
  settings: {
    'import/ignore': ['node_modules'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      typescript: {
        alwaysTryTypes: true,
      },
    },
    react: {
      version: 'detect',
    },
  },
};
