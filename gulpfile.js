var gulp = require('gulp');
var tslint = require("gulp-tslint");
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var gulpTypings = require("gulp-typings");
var typescript = require('gulp-tsc');
var config = require('./gulp.config')();
var del = require('del');
var runSequence = require('run-sequence');

gulp.task('default', ['tslint-json']);

gulp.task("tslint-json", () =>
    gulp.src(config.ng2bSrc.concat(config.demoSrc))
        .pipe(tslint())
        .pipe(tslint.report("prose"))
);

gulp.task('build', function(callback) {
    runSequence('clean:all', 'install-typings', 'compile', ['uglify', 'copy-definition', 'copy-doc'], 'clean:build-dir',  callback);
});

gulp.task("install-typings",function(){
    return gulp.src(config.typingsConf)
        .pipe(gulpTypings());
});

gulp.task('compile', function() {
    return gulp.src(config.ng2bSrc.concat(config.typingsSrc))
        .pipe(typescript(config.tscConf))
        .pipe(gulp.dest(config.buildDir));
});

gulp.task('uglify', function() {
    return gulp.src(config.buildJsSrc)
        .pipe(uglify())
        .pipe(gulp.dest(config.distDir))
        .pipe(concat('ng2b-all.min.js'))
        .pipe(gulp.dest(config.distDir + 'bundles'))
        ;
});

gulp.task('clean:all', function() {
    return del.sync([config.buildDir, config.distDir]);
});

gulp.task('clean:build-dir', function() {
    return del.sync([config.buildDir]);
});

gulp.task('copy-definition', function() {
    return gulp.src([config.buildDir + '*.d.ts', config.buildDir + '**/*.d.ts'])
        .pipe(gulp.dest(config.distDir))
})

gulp.task('copy-doc', function() {
    return gulp.src('*.md')
        .pipe(gulp.dest(config.npmRelease))
})