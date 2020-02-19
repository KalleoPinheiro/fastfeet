module.exports = {
  env: {
    node: true,
    es6: true,
    jest: true
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/@typescript-eslint',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:prettier/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', '@typescript-eslint/eslint-plugin', 'jest', 'prettier', 'eslint-plugin-import-helpers'],
  rules: {
    "@typescript-eslint/interface-name-prefix": [
      "error",
      {
        "prefixWithI": "always"
      }
    ],
    semi: ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: [
          'module',
          '/^@app/',
          '/^@models/',
          '/^@controllers/',
          '/^@configs/',
          '/^@database/',
          '/^@tests/',
          '/^@typings/',
          '/^@logs/',
          '/^@utils/',
          ['parent', 'sibling', 'index'],
        ],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
    quotes: ['error', 'single', { 'avoidEscape': true }],
    'comma-dangle': ['error', 'only-multiline'],
    'space-before-function-paren': 'off',
    'prettier/prettier': 'error',
    'no-underscore-dangle': 'off',
    'class-methods-use-this': 'off',
    'no-await-in-loop': 'off',
    'import/prefer-default-export': 'off',
    'camelcase': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        'ts': 'never'
      }
    ]
  },
  overrides: [
    {
      files: ['*.js', '*.ts'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off'
      }
    }
  ],
  settings: {
    'import/extensions': ['.ts', '.js'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.js']
    },
    'import/resolver': {
      'typescript': {
        'alwaysTryTypes': true
      }
    }
  }
};
