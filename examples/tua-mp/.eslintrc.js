module.exports = {
    extends: 'standard',
    parser: 'babel-eslint',
    plugins: ['html'],
    rules: {
        'indent': [2, 4],
        'promise/param-names': 0,
        'comma-dangle': [2, 'always-multiline'],
    },
    globals: {
        wx: true,
        App: true,
        Page: true,
        getApp: true,
        getPage: true,
        Component: true,
    },
}
