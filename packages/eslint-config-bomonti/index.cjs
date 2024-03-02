module.exports = {
  extends: [
    'plugin:unicorn/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  plugins: ['unicorn', '@typescript-eslint', 'react'],
  parser: '@typescript-eslint/parser',
  ignorePatterns: ['**/node_modules/**', '**/build/**', '**/dist/**'],
  rules: {
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          camelCase: true,
          pascalCase: true,
          kebabCase: true,
        },
      },
    ],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`

        // use an array of glob patterns
        project: ['/packages/*/tsconfig.json', '/app/*/tsconfig.json'],
      },
    },
    react: {
      version: 'detect',
    },
  },
};
