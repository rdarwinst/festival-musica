import { src, dest, watch, series } from 'gulp';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';

const sass = gulpSass(dartSass);

// Rutas
const paths = {
    sass: 'src/scss/**/*.scss',
    js: 'src/js/**/*.js',
};

// Compilar SASS
export function css(done) {
    src(paths.sass, {sourcemaps: true})
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('build/css', {sourcemaps: '.'}));
    done();
}

export function js(done) {

    src(paths.js)
        .pipe( dest('build/js'));

    done();
}

export function dev() {
    watch(paths.sass, css);
    watch(paths.js, js);
}
export default series(js, css, dev);