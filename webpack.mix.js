const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    // .extract(['d3'])
    .sass('resources/sass/app.scss', 'public/css')
    .sass('resources/trademapper/resources/styles/trademapper.scss', 'public/css')
    .sourceMaps(false)
    .copy('resources/trademapper', 'public/trademapper')
    .copy('resources/fonts', 'public/fonts');

mix.browserSync({
    proxy: process.env.BROWSER_SYNC_HOST || 'http://localhost',
    port: process.env.BROWSER_SYNC_PORT || 3000
});
