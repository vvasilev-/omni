const path = require('path');
const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
    .ts('resources/ts/app.tsx', 'public/js')
    .react()
    .postCss('resources/css/app.css', 'public/css', [
        require("tailwindcss"),
    ])
    .webpackConfig({
        output: {
            chunkFilename: 'js/[name].js?id=[chunkhash]',
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'resources/ts'),
            },
        },
    })
    .version();
