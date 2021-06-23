module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['react-app', 'react-app/jest', '@imaginary-cloud/react'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'space-before-function-paren': 'error',
    'react/no-unescaped-entities': 0,
    'no-noninteractive-element-interactions': 0,
    'func-names': 0,
    'no-shadow': 0,
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
}
