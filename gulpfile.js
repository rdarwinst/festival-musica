'use strict';
// CSS
const { src, dest, watch, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
// Plumber
const plumber = require('gulp-plumber');
// Imagenes
const cache = require('gulp-cache');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const avif = require('gulp-avif');



function CSS(done) {
    src('src/scss/**/*.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(dest('build/css'));

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
        losssless: true
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
    done();
}

exports.CSS = CSS;
exports.imagenes = imagenes;
exports.convertirAvif = convertirAvif;
exports.convertirWebp = convertirWebp;

exports.dev = parallel(imagenes, convertirAvif, convertirWebp, dev);