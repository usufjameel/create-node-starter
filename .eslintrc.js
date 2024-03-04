module.exports = {
  ignorePatterns: ['.eslintrc.js', 'lint-staged.config.js'],
  rules: {
    'prefer-const': 'error',
    semi: 'error',
    'comma-dangle': ['error', 'never'],
  },
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: 'standard',
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
  parserOptions: {
    ecmaVersion: 'latest',
  },
};
