var elixir = require('laravel-elixir');

elixir(function (mix) {
    mix.sass('app.scss');

    mix.browserSync({
        files: ['app/**/*', 'public/**/*', 'resources/views/**/*'],
        port: 5000,
        proxy: 'localhost:8000'
    });
});
