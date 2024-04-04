module.exports = {
    rules: {
        'vue/array-bracket-newline': 'off',

        'vue/array-bracket-spacing': ['error', 'never'],

        'vue/arrow-spacing': ['error', {
            after: true,
            before: true
        }],

        'vue/block-lang': 'off',

        'vue/block-spacing': ['error', 'always'],

        'vue/block-tag-newline': ['error', {
            maxEmptyLines: 0,
            multiline: 'always',
            singleline: 'never'
        }],

        'vue/brace-style': ['error', 'stroustrup'],

        'vue/camelcase': [
            'error',
            {
                ignoreDestructuring: true,
                properties: 'never'
            }
        ],

        'vue/comma-dangle': ['error', 'never'],

        'vue/comma-spacing': ['error', {
            after: true,
            before: false
        }],

        'vue/comma-style': ['error', 'last'],

        'vue/component-definition-name-casing': ['error', 'PascalCase'],

        'vue/component-name-in-template-casing': ['error', 'PascalCase'],

        'vue/component-tags-order': [
            'error',
            {
                order: ['template', 'script', 'style']
            }
        ],

        'vue/custom-event-name-casing': ['error', 'kebab-case'],

        'vue/dot-location': ['error', 'property'],

        'vue/dot-notation': 'off',

        'vue/eqeqeq': ['error', 'always', { null: 'ignore' }],

        'vue/func-call-spacing': ['error', 'never'],

        'vue/html-button-has-type': ['error', {
            button: true,
            reset: true,
            submit: true
        }],

        'vue/html-closing-bracket-newline': [
            'error',
            {
                multiline: 'always',
                singleline: 'never'
            }
        ],

        'vue/html-comment-content-newline': 'off',

        'vue/html-comment-content-spacing': 'off',

        'vue/html-comment-indent': 'off',

        'vue/html-indent': ['error', 4],

        'vue/key-spacing': [
            'error',
            {
                afterColon: true,
                beforeColon: false,
                mode: 'minimum'
            }
        ],

        'vue/keyword-spacing': [
            'error',
            {
                after: true,
                before: true,
                overrides: {
                    case: { after: true },
                    return: { after: true },
                    throw: { after: true }
                }
            }
        ],

        'vue/match-component-file-name': 'off',

        'vue/max-len': [
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

        'vue/new-line-between-multi-line-property': 'error',

        'vue/next-tick-style': ['error'],

        'vue/no-bare-strings-in-template': 'off',

        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-boolean-default.md
        'vue/no-boolean-default': 'off',

        'vue/no-constant-condition': ['warn', {
            checkLoops: false
        }],

        'vue/no-custom-modifiers-on-v-model': 'off',

        // https://vuejs.org/v2/api/#scope-removed
        'vue/no-deprecated-scope-attribute': 'warn',

        'vue/no-deprecated-slot-attribute': 'error',

        'vue/no-deprecated-slot-scope-attribute': 'error',

        'vue/no-deprecated-v-is': 'error',

        'vue/no-duplicate-attr-inheritance': 'warn',

        'vue/no-empty-component-block': 'error',

        'vue/no-empty-pattern': 'error',

        'vue/no-export-in-script-setup': 'error',

        'vue/no-extra-parens': 'off',

        'vue/no-invalid-model-keys': 'error',

        'vue/no-irregular-whitespace': 'error',

        'vue/no-multiple-objects-in-class': 'warn',

        'vue/no-multiple-template-root': 'error',

        'vue/no-potential-component-option-typo': ['error', {
            presets: ['all']
        }],

        'vue/no-reserved-component-names': 'error',

        'vue/no-restricted-block': 'off',

        'vue/no-restricted-call-after-await': 'off',

        'vue/no-restricted-component-options': 'off',

        'vue/no-restricted-custom-event': 'off',

        'vue/no-restricted-props': 'off',

        'vue/no-restricted-static-attribute': 'off',

        // Copy of baseAIrbnb restricted-syntax ruleset
        // https://github.com/airbnb/javascript/blob/b85baeafed8b66fdd9756439a0b8774860147913/packages/eslint-config-airbnb-base/rules/style.js#L332-L352
        'vue/no-restricted-syntax': [
            'error',
            {
                message:
                    'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
                selector: 'ForInStatement'
            },
            {
                message:
                    'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
                selector: 'ForOfStatement'
            },
            {
                message:
                    'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
                selector: 'LabeledStatement'
            },
            {
                message:
                    '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
                selector: 'WithStatement'
            }
        ],

        'vue/no-restricted-v-bind': 'off',

        'vue/no-sparse-arrays': 'warn',

        'vue/no-static-inline-styles': 'error',

        'vue/no-template-target-blank': ['error', {
            allowReferrer: true,
            enforceDynamicLinks: 'always'
        }],

        'vue/no-this-in-before-route-enter': 'error',

        'vue/no-unregistered-components': 'off',

        'vue/no-unsupported-features': 'error',

        'vue/no-unused-properties': 'warn',

        'vue/no-unused-refs': 'warn',

        'vue/no-use-computed-property-like-method': 'warn',

        'vue/no-useless-concat': 'error',

        'vue/no-useless-mustaches': 'warn',

        'vue/no-useless-v-bind': 'error',

        'vue/no-v-for-template-key': 'error',

        'vue/no-v-html': 'warn',

        'vue/no-v-model-argument': 'error',

        'vue/object-curly-newline': ['error', {
            ExportDeclaration: {
                consistent: true,
                minProperties: 4,
                multiline: true
            },
            ImportDeclaration: {
                consistent: true,
                minProperties: 4,
                multiline: true
            },
            ObjectExpression: {
                consistent: true,
                minProperties: 4,
                multiline: true
            },
            ObjectPattern: {
                consistent: true,
                minProperties: 4,
                multiline: true
            }
        }],

        'vue/object-curly-spacing': ['error', 'always'],

        'vue/object-property-newline': ['error', {
            allowAllPropertiesOnSameLine: true
        }],

        'vue/operator-linebreak': ['error', 'before'],

        'vue/padding-line-between-blocks': ['error', 'always'],

        'vue/prefer-template': 'error',

        'vue/require-direct-export': 'off',

        'vue/require-emit-validator': 'error',



        'vue/require-name-property': 'off',

        'vue/script-indent': 'off',

        'vue/sort-keys': 'off',

        'vue/space-in-parens': 'error',

        'vue/space-infix-ops': 'error',

        // Require or disallow spaces before/after unary operators
        // https://eslint.org/docs/rules/space-unary-ops
        'vue/space-unary-ops': [
            'error',
            {
                nonwords: false,
                words: true
            }
        ],

        'vue/static-class-names-order': 'off',

        'vue/template-curly-spacing': 'error',

        'vue/v-for-delimiter-style': 'error',

        'vue/v-on-event-hyphenation': ['error', 'always'],

        'vue/v-on-function-call': ['error', 'never'],

        'vue/v-slot-style': 'off',

        'vue/valid-next-tick': 'error',

        'vue/valid-v-bind-sync': 'error',

        'vue/valid-v-memo': 'error',

        'vue/valid-v-slot': 'error'
    }
};
