// eslint.config.js
import eslintPluginPrettier from 'eslint-plugin-prettier';
import prettier from 'eslint-config-prettier';

export default [
  {
    files: ['**/*.js', '**/*.ts', '**/*.jsx', '**/*.tsx'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    rules: {
      semi: ['error', 'always'],
      'prettier/prettier': ['error'],
    },
    plugins: {
      prettier: eslintPluginPrettier,
    },
  },
  prettier,
];
