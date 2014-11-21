var through = require('through2');
var gutil = require('gulp-util');
var PluginError = gutil.PluginError;
var purge = require('css-purge-alt/lib/css-purge');

const PLUGIN_NAME = 'gulp-css-purge';

function gulpCSSPurge() {
  var stream = through.obj(function(file, enc, cb) {
    if (file.isNull()) {
      // File is null, do nothing.
    }

    if (file.isBuffer()) {
      file.contents = purge(file.contents);
    }
  
    if (file.isStream()) {
      file.contents = purge(file.contents);
    }

    this.push(file);

    return cb();
  })
  return stream;
}

module.exports = gulpCSSPurge;


