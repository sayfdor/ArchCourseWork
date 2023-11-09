/* Paths */
const srcPath = "src/"
const distPath = "dist/"

const path = {
    src: {
        html: srcPath + "templates/*.html",
        css: srcPath + "static/css/*.css",
        img: srcPath + "static/img/**/*.{jpg,png,svg}"
    },

    build: {
      html: distPath
    },

    watch: {
        html: srcPath + "**/*.html",
        css: srcPath + "static/**/*.css",
        img: srcPath + "static/img/**/*.{jpg,png,svg}"
    }
}

gulp = require('gulp');
rigger = require('gulp-rigger');

    gulp.task('html', function() {
        gulp.src(path.watch.html)
            .pipe(rigger())
            .pipe(gulp.dest(path.build.html));
    });