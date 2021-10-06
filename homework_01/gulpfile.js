const gulp = require('gulp');
const less = require('gulp-less');
const browserSync = require("browser-sync").create();
const postcss = require("gulp-postcss");
const cssnano = require("cssnano");


gulp.task('less', function (done) {
    gulp.src('./less/**/*.less')
        .pipe(less())
        .pipe(gulp.dest('./'))
    done()
})

gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: './'
        },
        port: 3000
    })
    gulp.watch('./**/*').on("change", browserSync.reload)
})

gulp.task('build', function () {
    gulp.src('/style.css')
        .pipe(postcss([cssnano]))
        .pipe(gulp.dest("./less/**/*.less"))
})

gulp.task('less:watch', function () {
    gulp.watch('./less/**/*.less', gulp.series('less'))
})

gulp.task('default', gulp.parallel('less:watch', 'serve'))