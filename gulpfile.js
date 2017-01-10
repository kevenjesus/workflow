var gulp = require("gulp");
var sass = require("gulp-sass");
var minifyHtml = require('gulp-minify-html');
// var minifyScss = require('gulp-minify-css');

gulp.task('compila-scss', function() {
	return gulp.src('source/scss/**/*.scss')
	.pipe(sass({outputStyle: 'compressed'}))
	.pipe(gulp.dest('./dist/css'))
});

// gulp.task('minify-scss', function() {
// 	return gulp.src('source/scss/**/*.scss')
// 		.pipe(minifyScss())
// 		.pipe(gulp.dest('./dist/css'));
// })

gulp.task('compila-html', function() {
	return gulp.src('source/index.html')	
				.pipe(minifyHtml())	
				.pipe(gulp.dest('./dist'));
});

// gulp.task('minify-html', function() {
// 	return gulp.src('source/index.html')
// 		.pipe(minifyHtml())
// 		.pipe(gulp.dest('./dist'));
// });

gulp.task('watcho', function() {
	gulp.watch('./source/scss/*.scss',['compila-scss']);
	gulp.watch('./source/index.html',['compila-html']);
});

gulp.task('default',['compila-scss','compila-html','watcho']);
