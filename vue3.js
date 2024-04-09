const resolvedExtends = [
    './rules/vue',
    './rules/vue/vue3',
    'eslint-config-airbnb-base',
    './rules/best-practices',
    './rules/errors',
    './rules/node',
    './rules/style',
    './rules/es6',
    './rules/imports',
    './rules/variables',
    './rules/deprecated'
].map(require.resolve);

resolvedExtends.unshift('plugin:vue/vue3-recommended');

module.exports = {
    env: {
        browser: true,
        es6: true,
        jest: true,
        node: true
    },
    extends: resolvedExtends,
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    root: true,
    rules: {
        strict: 'error'
    }
};
