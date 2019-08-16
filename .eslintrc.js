module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:jsdoc/recommended'],
  env: {
    es6: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    project: './tsconfig.json',
    sourceType: 'module',
  },
  rules: {
    curly: ['error', 'multi-line'],
    indent: ['error', 'tab'],
    'linebreak-style': 'error',
    'prefer-const': 'error',
    'prefer-template': 'error',
    'quotes': ['error', 'single'],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-inferrable-types': ['error', { ignoreParameters: true }],
    '@typescript-eslint/prefer-readonly': 'error',
    '@typescript-eslint/type-annotation-spacing': ['error', { before: true }],
    'jsdoc/require-param-type': 'off',
    'jsdoc/require-returns': 'off',
  },
};
