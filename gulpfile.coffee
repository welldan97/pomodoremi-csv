gulp = require 'gulp'
coffee = require 'gulp-coffee'

gulp.task 'build', ->
  gulp.src(['src/**/*.coffee'])
    .pipe(coffee(bare: true))
    .pipe gulp.dest('lib')

  gulp.src('src/cli.coffee')
    .pipe(coffee(bare: true))
    .pipe(insert.prepend('#!/usr/bin/env node\n'))
    .pipe gulp.dest('lib')

gulp.task 'default', ['build']
