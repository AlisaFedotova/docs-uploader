module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:react/jsx-runtime',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react'],
  rules: {
    eqeqeq: 'warn',
    'prettier/prettier': ['warn', { endOfLine: 'auto' }],
    'prefer-const': 'warn',
    'no-var': 'warn',
    'object-shorthand': 'warn',
    'prefer-object-spread': 'warn',
    'no-array-constructor': 'warn',
    'array-callback-return': 'warn',
    'prefer-destructuring': 'warn',
    'prefer-template': 'warn',
    'arrow-parens': 'warn',
    'no-iterator': 'warn',
    'brace-style': 'warn',
    'spaced-comment': 'warn',
    'no-eval': 'error',
    'no-param-reassign': 'error',
    'prefer-arrow-callback': 'error',
    'nonblock-statement-body-position': 'error',
  },
};
