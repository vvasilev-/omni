module.exports = {
    corePlugins: {
        ringWidth: false,
    },
    purge: [
        './resources/**/*.blade.php',
        './resources/**/*.ts',
        './resources/**/*.tsx',
    ],
    darkMode: false,
    theme: {
        extend: {},
    },
    variants: {
        extend: {
            backgroundColor: ['disabled'],
            opacity: ['disabled'],
        },
    },
    plugins: [],
};
