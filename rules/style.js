module.exports = {
    rules: {
        'array-bracket-newline': 'off',

        'array-element-newline': 'off',

        'brace-style': ['error', '1tbs'],

        // require camel case names
        camelcase: [
            'warn',
            {
                ignoreDestructuring: true,
                properties: 'never'
            }
        ],

        // Stop dangling commas
        // http://eslint.org/docs/rules/comma-dangle
        'comma-dangle': ['error', 'never'],

        'dot-location': ['error', 'property'],

        'dot-notation': 'off',

        'function-call-argument-newline': 'off',

        'global-require': 'off',

        indent: [
            'error',
            4,
            {
                FunctionDeclaration: {
                    body: 1,
                    parameters: 1
                },
                FunctionExpression: {
                    body: 1,
                    parameters: 1
                },

                MemberExpression: 'off',
                SwitchCase: 1,
                VariableDeclarator: 1,

                ignoredNodes: ['TemplateLiteral'],
                outerIIFEBody: 1
            }
        ],

        // enforces spacing between keys and values in object literal properties
        'key-spacing': [
            'error',
            {
                afterColon: true,
                beforeColon: false,
                mode: 'minimum'
            }
        ],

        'linebreak-style': ['error', 'unix'],

        'lines-around-comments': 'off',

        // specify the maximum length of a line in your program
        // http://eslint.org/docs/rules/max-len
        'max-len': [
            'error',
            {
                code: 200,
                ignoreComments: false,
                ignoreRegExpLiterals: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
                ignoreUrls: true,
                tabWidth: 4
            }
        ],

        'max-lines-per-function': 'off',

        // enforces new line after each method call in the chain to make it
        // more readable and easy to maintain
        // http://eslint.org/docs/rules/newline-per-chained-call
        'newline-per-chained-call': [
            'error',
            {
                ignoreChainWithDepth: 4
            }
        ],

        // disallow multiple empty lines and only one newline at the end
        'no-multiple-empty-lines': [
            'error',
            {
                max: 4
            }
        ],

        // Allow use of unary operators, ++ and --
        // http://eslint.org/docs/rules/no-plusplus
        'no-plusplus': 'off',

        'no-tabs': 'error',

        // disallow dangling underscores in identifiers
        'no-underscore-dangle': 'off',

        'object-curly-spacing': ['error', 'always'],

        // allow single or multiple var statements per function
        'one-var': 'off',

        // https://eslint.org/docs/rules/operator-linebreak
        'operator-linebreak': ['error', 'before'],

        'padding-line-between-statements': [
            'error',
            {
                blankLine: 'always',
                next: 'return',
                prev: '*'
            }
        ],

        'prefer-object-spread': 'error',

        quotes: [
            'error',
            'single',
            {
                allowTemplateLiterals: true,
                avoidEscape: true
            }
        ],

        'semi-style': ['error', 'last'],

        'sort-keys': 'off',

        // require or disallow space before function opening parenthesis
        // http://eslint.org/docs/rules/space-before-function-paren
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'always',
                asyncArrow: 'always',
                named: 'always'
            }
        ],

        // require or disallow a space immediately following
        // the // or /* in a comment
        // http://eslint.org/docs/rules/spaced-comment
        'spaced-comment': [
            'error',
            'always',
            {
                block: {
                    balanced: false,
                    exceptions: ['-', '*']
                },
                line: {
                    exceptions: ['-', '*'],
                    markers: ['global']
                }
            }
        ],

        'switch-colon-spacing': ['error', { after: true, before: false }],

        yoda: [
            'error',
            'never',
            {
                exceptRange: true
            }
        ]
    }
};
