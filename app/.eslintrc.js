module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'import/extensions': [
      'error',
      'never',
      {
        json: 'always',
      },
    ],
    'import/named': 'off',
    'import/namespace': 'off',
    'import/no-cycle': 'error',
    'import/no-unresolved': 'error',
    'linebreak-style': ['error', 'unix'],
    'no-console': 'error',
    'newline-before-return': 'error',
    strict: ['error', 'global'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx'] }],
    'import/prefer-default-export': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['warn'],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    camelcase: 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    '@typescript-eslint/camelcase': 'off',
    'react/require-default-props': 'off',
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
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
      'eslint-import-resolver-custom-alias': {
        alias: {
          '@meli': './',
          '@meli/components': './components',
          '@meli/constants': './constants',
        },
        extensions: ['.js', '.jsx'],
      },
    },
  },
};
