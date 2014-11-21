# Gulp CSS Purge

Purges duplicate CSS rules. Based on [css-purge](https://www.npmjs.org/package/css-purge)

## Example
    var gulp = require('gulp'),
        sass = require('gulp-ruby-sass'),
        purge = require('gulp-css-purge'),
        minify = require('gulp-minify-css');

    gulp.task('default', function() {
      gulp.src(['./**/*.sass'])
        .pipe(sass())
        .pipe(purge())
        .pipe(minify())
        .pipe(gulp.dest('./public'));
    })

