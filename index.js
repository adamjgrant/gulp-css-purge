var through = require('through2');
var gutil = require('gulp-util');
var PluginError = gutil.PluginError;
var purge = require('css-purge-alt/lib/css-purge');

const PLUGIN_NAME = 'gulp-css-purge';

function purgeStream(contents) {
  var stream = through();
  stream.write(contents);
  return stream;
}

function gulpCSSPurge() {
  var stream = through.obj(function(file, enc, cb) {
    if (file.isNull()) {
      // File is null, do nothing.
    }

    if (file.isBuffer()) {
      file.contents = Buffer.concat([purge(null, null, null, file.contents), file.contents]);
    }
  
    if (file.isStream()) {
      file.contents = file.contents.pipe(purgeStream(purge(null, null, null, file.contents)));
    }

    this.push(file);

    return cb();
  })
  return stream;
}

module.exports = gulpCSSPurge;


