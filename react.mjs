import eslintPluginTypescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import importHelpers from 'eslint-plugin-import-helpers';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import { default as eslintPluginReact } from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';

export default [
	{
		files: ['**/*.tsx', '**/*.jsx', '**/*.ts', '**/*.js', '**/*.mjs'],
		ignores: ['node_modules/**', 'build', 'dist'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			parser: typescriptParser,
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
		},
		plugins: {
			react: eslintPluginReact,
			'react-hooks': eslintPluginReactHooks,
			'@typescript-eslint': eslintPluginTypescript,
			'jsx-a11y': jsxA11y,
			'import-helpers': importHelpers,
			prettier: eslintPluginPrettier,
		},
		rules: {
			'prettier/prettier': [
				'error',
				{
					plugins: ['prettier-plugin-tailwindcss'],
					tailwindConfig: './tailwind.config.js',
					tailwindFunctions: ['cva', 'cn'],
					tailwindAttributes: [],
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
				{
					args: 'all',
					argsIgnorePattern: '^_',
					caughtErrors: 'all',
					caughtErrorsIgnorePattern: '^_',
					destructuredArrayIgnorePattern: '^_',
					varsIgnorePattern: '^_',
					ignoreRestSiblings: true,
				},
			],
			'react/self-closing-comp': 'error',
			'@typescript-eslint/no-explicit-any': 'off',
			'react-hooks/exhaustive-deps': 'off',
			'react/no-unknown-property': 'error',
			'react/react-in-jsx-scope': 'off',
			'react/prop-types': 'off',
			'react/no-unknown-property': 'error',
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
			react: {
				version: 'detect',
			},
			'import/parsers': {
				'@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
			},
		},
	},
];
