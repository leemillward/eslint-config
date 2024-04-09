module.exports = {
    rules: {
        // require camel case names
        camelcase: [
            'warn',
            {
                ignoreDestructuring: true,
                properties: 'never'
            }
        ],

        'dot-notation': 'off',

        'max-lines-per-function': 'off',

        // Allow use of unary operators, ++ and --
        // http://eslint.org/docs/rules/no-plusplus
        'no-plusplus': 'off',

        // disallow dangling underscores in identifiers
        'no-underscore-dangle': 'off',

        // allow single or multiple var statements per function
        'one-var': 'off',

        'prefer-object-spread': 'error',

        'sort-keys': 'off',

        yoda: [
            'error',
            'never',
            {
                exceptRange: true
            }
        ]
    }
};
