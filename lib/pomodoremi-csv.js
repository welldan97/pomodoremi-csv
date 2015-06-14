var LOG_PATH, PomodoremiCSV, fs;

LOG_PATH = process.env.HOME + "/.pomodoro/log.csv";

fs = require('fs');

PomodoremiCSV = (function() {
  function PomodoremiCSV(logPath) {
    this.logPath = logPath != null ? logPath : LOG_PATH;
  }

  PomodoremiCSV.prototype.stop = function(interval, delay, cb) {
    var data, line;
    data = [this.interval.name, this.interval.startTime, this.interval.stopTime, this.tags.join(' ')];
    line = '"' + data.join('", "') + '"';
    return fs.appendFile(LOG_PATH, line, function(err) {});
  };

  return PomodoremiCSV;

})();

module.exports = PomodoremiCSV;
