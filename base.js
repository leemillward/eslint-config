const resolvedExtends = [
    'eslint-config-airbnb-base',
    './rules/best-practices',
    './rules/errors',
    './rules/node',
    './rules/style',
    './rules/es6',
    './rules/imports',
    './rules/variables'
].map(require.resolve);

module.exports = {
    env: {
        browser: true,
        es6: true,
        jest: true,
        node: true
    },
    extends: resolvedExtends,
    parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module'
    },
    root: true,
    rules: {
        strict: 'error'
    }
};
