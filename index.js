var through = require('through2');
var gutil = require('gulp-util');
var PluginError = gutil.PluginError;
var purge = require('css-purge');

const PLUGIN_NAME = 'gulp-css-purge';

function gulpCSSPurge() {
  var stream = through.obj(function(file, enc, cb) {
  
  })
  return stream;
}


