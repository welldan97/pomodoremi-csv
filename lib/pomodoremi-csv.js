var LOG_PATH, PomodoremiCSV, fs;

LOG_PATH = process.env.HOME + "/.pomodoremi/log.csv";

fs = require('fs');

PomodoremiCSV = (function() {
  function PomodoremiCSV(logPath) {
    this.logPath = logPath != null ? logPath : LOG_PATH;
  }

  PomodoremiCSV.prototype.stop = function(interval, delay, cb) {
    var data, line;
    if (interval.type === 'work') {
      data = [interval.name, interval.startTime, interval.stopTime, interval.tags.join(' ')];
      line = '"' + data.join('", "') + '"';
      fs.appendFile(LOG_PATH, line, function(err) {});
    }
    return cb();
  };

  return PomodoremiCSV;

})();

module.exports = PomodoremiCSV;
