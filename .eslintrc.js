require('@reskript/config-lint/patch');

module.exports = {
    extends: require.resolve('@reskript/config-lint/config/eslint'),
    parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
    },
    rules: {
        'max-len': 'off',
        'no-unused-expressions': 'off',
        'react/jsx-no-bind': 'off',
    },
};
