module.exports = {
    rules: {
        'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],

        'import/extensions': ['error', 'never'],

        'import/no-anonymous-default-export': 'off',

        'import/no-dynamic-require': 'off',

        'import/no-empty-named-blocks': 'error',

        'import/no-extraneous-dependencies': 'off',

        'import/no-import-module-exports': 'off',

        'import/no-named-export': 'off',

        'import/no-relative-packages': 'warn',

        'import/no-relative-parent-imports': 'off',

        'import/no-unresolved': [
            'error',
            {
                caseSensitive: false,
                commonjs: true
            }
        ],

        'import/no-unused-modules': 'off',

        'import/prefer-default-export': 'warn'
    },
    settings: {
        'import/resolver': {
            node: { extensions: ['.js', '.json', '.vue'] }
        }
    }
};
