module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	extends: ['plugin:react/recommended', 'standard', 'eslint-config-prettier'],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react'],
	rules: {
		'react/prop-types': 'warn',
		semi: 'off',
		'react/no-unknown-property': 'off',
	},
};
