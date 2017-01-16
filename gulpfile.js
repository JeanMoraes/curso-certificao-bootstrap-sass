var gulp = require("gulp");
var sass = require('gulp-sass');
var notify 	= require("gulp-notify");
var htmlmin = require('gulp-htmlmin');

gulp.task("sass", function(){
	return gulp.src('./source/scss/style.scss')
				.pipe(sass())
				.on("error", notify.onError({title:"erro ao compilar", message:"<%= error.message %>"}))
				.pipe(gulp.dest("./dist/css"))
});

gulp.task('minify-html', function() { 
  gulp.src('./source/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./dist/'))
});

gulp.task('tempo-real', function(){
	gulp.watch('./source/scss/**/*.scss', ['sass']);
	gulp.watch('./source/*.html', ['minify-html']);
});

