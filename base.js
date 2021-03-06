module.exports = {
  extends: [
    'airbnb-base/whitespace'
  ],
  settings: {
    'import/extensions': [
      '.js',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
    ],
  },
  rules: {
    'import/extensions': ['warn', 'always', {
      js: 'never',
      mjs: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
    }],
    'comma-dangle': ['error', 'never'],
    'max-len': ['error', { code: 120 }],
    'no-nested-ternary': 'off',
    'no-bitwise': 'off',
    'no-plusplus': 'off',
    'no-param-reassign': 'off',
    'no-use-before-define': 'off',

    'no-unused-expressions': ['warn', {
      allowShortCircuit: true,
      allowTernary: true,
      allowTaggedTemplates: true
    }]
  }
}