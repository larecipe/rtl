let mix = require('laravel-mix')

mix.setPublicPath('dist')
    .sass('resources/sass/asset.scss', 'css');
