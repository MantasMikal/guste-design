module.exports = {
  globals: {
    __PATH_PREFIX__: true
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/forbid-foreign-prop-types': 'off',
    'linebreak-style': 'off'
  },
  extends: ['react-app', 'plugin:prettier/recommended']
}
