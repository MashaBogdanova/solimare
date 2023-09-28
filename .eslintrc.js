module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  parserOptions: {
    project: 'tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'next/core-web-vitals',
    'standard',
    'airbnb',
    'airbnb-typescript',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'no-nested-ternary': 'off',
    'prettier/prettier': 'error',
    '@typescript-eslint/no-explicit-any': 2,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        '': 'never',
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  overrides: [
    {
      files: ['src/redux/slices/**/*.ts'],
      rules: {
        'no-param-reassign': 'off',
      },
    },
  ],
  ignorePatterns: './eslintrc.js',
};
