'use strict';

//Require Modules
var gulp = require('gulp');
var args = require('yargs').argv;
var autoprefixer = require('gulp-autoprefixer');
var minifycss = require('gulp-minify-css');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var gulpmatch = require('gulp-match');
var map = require('map-stream');
var vinylfs = require('vinyl-fs');
var usemin = require('gulp-usemin');
var minifyHTML = require('gulp-minify-html');


var template = args.template;




//Process CSS
gulp.task('process-css', function() {
  
  if(!template){ 
    console.log('use --template name to specify a template');
    return false;
  }
  
  
//   vinylfs.src('../templates/hoot/views/layout/index.html')
//   .pipe(map(function (file, cb) {
//     var match = gulpmatch(file, /href="([^\'\"]+)/g );
//     if (match) {
//       console.log('matched!');
//     }else {
//       console.log('no mathces');
//     }
//     cb(null, file);
//   }));
  
    
  console.log('- processing css for ' + template + '..');
  return gulp.src('../templates/' + template + '/public/css/*.css')
    .pipe(autoprefixer('last 1 version', '> 1%', 'ie 8', 'ie 7'))
    .pipe(concat('main.min.css'))
    .pipe(gulp.dest('public/assets/css/'))
    .pipe(minifycss())
    .pipe(gulp.dest('../templates/' + template + '/public/css/min/'))
});

//Process JS
gulp.task('process-js', function() {
  
  if(!template){ 
    console.log('use --template name to specify a template');
    return false;
  }
  
  console.log('- processing js for ' + template + '..');
  return gulp.src('../templates/' + template + '/public/js/**/*.js')
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('../templates/' + template + '/public/js/min/'))
});

//Process HTML
gulp.task('process-html', function() {
  gulp.src(['src/views/*.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(minifyHTML({
      comments:true,
      spare:true
    }))
    .pipe(gulp.dest('public/'))
});


//Defaul gulp task
gulp.task('default', [ 'process-css', 'process-html']);