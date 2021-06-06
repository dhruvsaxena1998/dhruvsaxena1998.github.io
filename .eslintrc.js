module.exports = {
  // https://eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy
  // This option interrupts the configuration hierarchy at this file
  // Remove this if you have an higher level ESLint config file (it usually happens into a monorepos)
  root: true,

  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true,
    },
  },

  env: {
    jest: true,
    es6: true,
    browser: true,
    node: true,
  },

  // Rules order is important, please avoid shuffling them
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
    'prettier/react',
  ],

  plugins: ['react', 'import', 'jsx-a11y'],

  globals: {
    ga: 'readonly', // Google Analytics
    __statics: 'readonly',
    chrome: 'readonly',
  },

  settings: {
    react: {
      version: 'detect',
    },
  },

  // add your custom rules here
  rules: {
    'no-console': 1,
    'no-unused-vars': 1,
    'react/prop-types': [
      'enabled',
      { ignore: 'ignore', customValidators: 'customValidator' },
    ],
  },
};
