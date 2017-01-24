/*
This file is the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. https://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var del = require('del');

var paths = {
    scripts: ['app/**/*.js', 'app/**/*.ts', 'app/**/*.map']
};

gulp.task('clean', function () {
    return del(['wwwroot/app/**/*']);
});

//gulp.task('default', function () {
//    // place code for your default task here
//    gulp.src(paths.scripts).pipe(gulp.dest('wwwroot/scripts'))
//});

var libs = './wwwroot/libs/';

gulp.task('default', function () {
    // place code for your default task here
    gulp.src(paths.scripts).pipe(gulp.dest('wwwroot/app'));
});

gulp.task('restore:core-js', function () {
    gulp.src(['node_modules/core-js/client/*.js']).pipe(gulp.dest(libs + 'core-js'));
});

gulp.task('restore:zone.js', function () {
    gulp.src(['node_modules/zone.js/dist/*.js']).pipe(gulp.dest(libs + 'zone.js'));
});

gulp.task('restore:reflect-metadata', function () {
    gulp.src(['node_modules/reflect-metadata/reflect.js']).pipe(gulp.dest(libs + 'reflect-metadata'));
});

gulp.task('restore:systemjs', function () {
    gulp.src(['node_modules/systemjs/dist/*.js']).pipe(gulp.dest(libs + 'systemjs'));
});

gulp.task('restore:rxjs', function () {
    gulp.src(['node_modules/rxjs/**/*.js']).pipe(gulp.dest(libs + 'rxjs'));
});

gulp.task('restore:angular-in-memory-web-api', function () {
    gulp.src(['node_modules/angular-in-memory-web-api/**/*.js']).pipe(gulp.dest(libs + 'angular-in-memory-web-api'));
});

gulp.task('restore:angular', function () {
    gulp.src(['node_modules/@angular/**/*.js']).pipe(gulp.dest(libs + '@angular'));
});

gulp.task('restore:bootstrap', function () {
    gulp.src(['node_modules/bootstrap/dist/**/*.*' ]).pipe(gulp.dest(libs + 'bootstrap'));
});

gulp.task('restore', [
    'restore:core-js',
    'restore:zone.js',
    'restore:reflect-metadata',
    'restore:systemjs',
    'restore:rxjs',
    'restore:angular-in-memory-web-api',
    'restore:angular',
    'restore:bootstrap'
]);