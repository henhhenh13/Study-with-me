module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'prettier', 'react', 'react-hooks', 'simple-import-sort'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
    ],
    rules: {
        '@typescript-eslint/explicit-module-boundary-types': 2,
        '@typescript-eslint/no-explicit-any': 2,
        'prettier/prettier': 2,
        'react-hooks/rules-of-hooks': 2,
        'react-hooks/exhaustive-deps': [
            1,
            {
                additionalHooks: '(useRecoilCallback|useRecoilTransaction_UNSTABLE)',
            },
        ],
        'simple-import-sort/imports': 2,
        'simple-import-sort/exports': 2,
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};