var LOG_PATH, PomodoremiCSV, fs;

LOG_PATH = process.env.HOME + "/.pomodoremi/log.csv";

fs = require('fs');

PomodoremiCSV = (function() {
  function PomodoremiCSV(logPath) {
    this.logPath = logPath != null ? logPath : LOG_PATH;
  }

  PomodoremiCSV.prototype.stop = function(interval, cb) {
    var data, line;
    if (interval.type === 'work') {
      data = [interval.name, interval.startedAt, interval.stoppedAt, interval.tags.join(' ')];
      line = '"' + data.join('", "') + '"\n';
      fs.appendFile(this.logPath, line, function(err) {});
    }
    return cb();
  };

  return PomodoremiCSV;

})();

module.exports = PomodoremiCSV;
