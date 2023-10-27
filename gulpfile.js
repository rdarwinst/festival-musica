'use strict';
// CSS
const { src, dest, watch, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const sm = require('gulp-sourcemaps');
const plumber = require('gulp-plumber');
// Imagenes
const cache = require('gulp-cache');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const avif = require('gulp-avif');

// JavaScript

const terser = require('gulp-terser-js');


function CSS(done) {
    src('src/scss/**/*.scss')
        .pipe(sm.init())
        .pipe(plumber())
        .pipe(sass())
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(sm.write('.'))
        .pipe(dest('build/css'));

    done();
}

function javascript(done) {
    src('src/js/**/*.js')
        .pipe(sm.init())
        .pipe(terser())
        .pipe(sm.write('.'))
        .pipe(dest('build/js'));
    done();
}

function imagenes(done) {
    const opciones = {
        optimizationLevel: 3
    }
    src('src/img/**/*{png,jpg}')
        .pipe(cache(imagemin(opciones)))
        .pipe(dest('build/img'));

    done();
}

function convertirAvif(done) {
    const opciones = {
        quality: 50,
        lossless: true
    }
    src('src/img/**/*.{png,jpg}')
        .pipe(avif(opciones))
        .pipe(dest('build/img'));
    done();
}

function convertirWebp(done) {
    const opciones = {
        quality: 50
    }
    src('src/img/**/*{png,jpg}')
        .pipe(webp(opciones))
        .pipe(dest('build/img'));

    done();
}

function dev(done) {
    watch('src/scss/**/*.scss', CSS);
    watch('src/js/**/*.js', javascript);
    done();
}

exports.CSS = CSS;
exports.js = javascript;
exports.imagenes = imagenes;
exports.convertirAvif = convertirAvif;
exports.convertirWebp = convertirWebp;

exports.dev = parallel(imagenes, convertirAvif, convertirWebp, javascript, dev);