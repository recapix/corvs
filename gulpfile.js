
var gulp = require("gulp");

gulp.task('images', function(){
return gulp.src('src/img/**/*.+(jpg|png|svg)')
.pipe(gulp.dest('www/assets/img'));
});

gulp.task("serve:before",["images"]);