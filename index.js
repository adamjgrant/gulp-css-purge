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
    if (file.isNull()) return cb(null, file);
    if (file.isStream()) return cb(new PluginError(PLUGIN_NAME, 'Streaming not supported'));

    var purgedCSS = ""
    try {
      purgedCSS = new Buffer(purge(null, null, null, file.contents.toString()));
    } catch (err) {
      return cb(new PluginError(PLUGIN_NAME, err));
    }

    if (file.isBuffer()) {
      file.contents = purgedCSS;
    }

    this.push(file);

    return cb();
  })
  return stream;
}

module.exports = gulpCSSPurge;


