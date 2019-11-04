
// 获取 gulp
const gulp = require('gulp');
// 获取 minify-css 模块（用于压缩 CSS）
var minifyCSS = require('gulp-minify-css');
var image = require('gulp-imagemin');
// 压缩 css 文件
gulp.task('default',function(done){
    // console.log('default task');
    gulp.src('css/*.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest('dist/css'));
    done();
});


// 压缩图片文件
gulp.task('default',function(done){
    // console.log('default task');
    gulp.src('sort-img/*')
        .pipe(image())
        .pipe(gulp.dest('dist/sort-img'));
    done();
});
