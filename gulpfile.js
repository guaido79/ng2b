var gulp = require('gulp');
var tslint = require("gulp-tslint");

gulp.paths = {
  tssrc: [
    '**/*.ts',
    '!node_modules/**/*',
    '!dist/**/*',
    '!typings/**/*',
    '!**/*.{ts,coffee}.js']
};

var paths = gulp.paths;

gulp.task('default', ['tslint-json']);

gulp.task("tslint-json", () =>
    gulp.src(paths.tssrc)
        .pipe(tslint())
        .pipe(tslint.report("prose"))
);