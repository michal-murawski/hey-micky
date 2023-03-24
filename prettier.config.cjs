module.exports = {
    semi: true,
    trailingComma: 'all',
    bracketSpacing: true,
    singleQuote: true,
    tabWidth: 4,
    endOfLine: 'auto',
    useTabs: false,
    tailwindConfig: './tailwind.config.cjs',
    plugins: [require('prettier-plugin-tailwindcss')],
};
