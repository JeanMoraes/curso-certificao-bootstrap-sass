var gulp = require("gulp");
var sass = require('gulp-sass');
var notify 	= require("gulp-notify");
var minifyHTML = require('gulp-minify-html');

gulp.task("sass", function(){
	return gulp.src('./source/scss/style.scss')
				.pipe(sass())
				.on("error", notify.onError({title:"erro ao compilar", message:"<%= error.message %>"}))
				.pipe(gulp.dest("./dist/css"))
});

gulp.task('minify-html', function() {
    var opts = {comments:true,spare:true};
    
  gulp.src('./source/*.html')
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest('./dist/'))
});

gulp.task('tempo-real', function(){
	gulp.watch('./source/scss/style.scss', ['sass']);
	gulp.watch('./source/*.html', ['minify-html']);
});

