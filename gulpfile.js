/* Paths */

const srcPath = "src/"
const distPath = "dist/"

const path = {
    src: {
        html: srcPath + "templates/*.html",
        css: srcPath + "static/**/*.css",
        img: srcPath + "static/img/**/*.{jpg,png,svg}"
    },

    build: {
        html: distPath,
        css: distPath + "static/css/"
    },

    watch: {
        html: srcPath + "**/*.html",
        css: srcPath + "static/css/*.css",
        img: srcPath + "static/img/**/*.{jpg,png,svg}"
    }
}


 /* Tasks */

gulp = require('gulp');
rigger = require('gulp-rigger');

    gulp.task('build', function() {
        gulp.src(path.watch.html)
            .pipe(rigger())
            .pipe(gulp.dest(path.build.html))
    });

gulp = require('gulp');
concatCss = require('gulp-concat');

gulp.task('default', function () {
    return gulp.src(path.watch.css)
        .pipe(concatCss("styles/bundle.css"))
        .pipe(gulp.dest('out/'));
});