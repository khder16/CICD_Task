import eslint from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser';
import globals from 'globals';
import prettier from 'eslint-config-prettier';

export default [
  eslint.configs.recommended,
  //   ...tseslint.configs.recommended,
  prettier,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser,
      parserOptions: {
        project: './tsconfig.json',
      },
      globals: {
        ...globals.node, // Adds Node.js globals
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      'no-undef': 'off', // TypeScript already handles this
    },
  },
  // Jest-specific configuration
  {
    files: ['**/*.test.ts', '**/*.spec.ts'],
    languageOptions: {
      globals: {
        ...globals.jest, // Adds Jest globals
      },
    },
  },
];
