var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass',function () {
    return gulp.src('./src/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'))
});
gulp.task('autoprefixer', function() {
    gulp.src('./dist/css/*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'Android >= 4.0','iOS >=7'],
            cascade: true,
            remove:true
        }))
        .pipe(gulp.dest('./dist/css'));
});
gulp.task('watch', function() {
    gulp.watch('./src/sass/*.scss', ['sass']);
    gulp.watch('./dist/css/*.css', ['autoprefixer']);
});