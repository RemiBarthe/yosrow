module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/no-unused-vars': 'error',
    'object-curly-spacing': ['error', 'always'],
    'template-curly-spacing': ['error', 'never'],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': ['error', { int32Hint: true }],
    semi: ['error', 'always', { omitLastInOneLineBlock: true }],
    'comma-spacing': ['error', { before: false, after: true }],
    indent: ['error', 2],
    'key-spacing': ['error', { afterColon: true, beforeColon: false }]
  }
};
