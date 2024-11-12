import eslintPluginTypescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import importHelpers from 'eslint-plugin-import-helpers';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import eslintPluginPrettier from 'eslint-plugin-prettier';

export default [
	{
		files: ['**/*.ts', '**/*.js', '**/*.mjs'],
		ignores: ['node_modules/**', 'build'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			parser: typescriptParser,
		},
		plugins: {
			prettier: eslintPluginPrettier,
			'@typescript-eslint': eslintPluginTypescript,
			'jsx-a11y': jsxA11y,
			'import-helpers': importHelpers,
		},
		rules: {
			'prettier/prettier': [
				'error',
				{
					printWidth: 80,
					tabWidth: 2,
					singleQuote: true,
					trailingComma: 'all',
					arrowParens: 'always',
					semi: true,
					endOfLine: 'auto',
					useTabs: true,
				},
			],
			'@typescript-eslint/no-unused-vars': [
				'error',
				{ varsIgnorePattern: '^_', argsIgnorePattern: '^_' },
			],
			'@typescript-eslint/no-explicit-any': 'off',
			'jsx-a11y/aria-props': 'warn',
			'react/display-name': 'off',
			'jsx-a11y/aria-proptypes': 'warn',
			'jsx-a11y/aria-unsupported-elements': 'warn',
			'jsx-a11y/role-has-required-aria-props': 'warn',
			'jsx-a11y/role-supports-aria-props': 'warn',
			'import-helpers/order-imports': [
				'warn',
				{
					newlinesBetween: 'always', // Cria uma nova linha para separar as importações
					groups: [
						['/^react/', '/^next/'],
						'module',
						'/^@shared/',
						'absolute',
						'/^components/',
						'/^pages/',
						'/utils/',
						'/constants/',
						'/^store/',
						'/^styles/',
						'/^templates/',
						['parent', 'sibling', 'index'],
					],
					alphabetize: {
						order: 'asc',
						ignoreCase: false,
					},
				},
			],
		},
		settings: {
			'import/parsers': {
				'@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
			},
		},
	},
];
