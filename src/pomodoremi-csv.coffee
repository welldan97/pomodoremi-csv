LOG_PATH = "#{process.env.HOME}/.pomodoremi/log.csv"

fs = require 'fs'

class PomodoremiCSV
  constructor: (@logPath = LOG_PATH) ->
  stop: (interval, cb) ->
    if interval.type == 'work'
      data = [
        interval.name
        interval.startedAt
        interval.stoppedAt
        interval.tags.join(' ')
      ]
      line ='"' + data.join('", "') + '"\n'
      fs.appendFile @logPath, line, (err) ->
    cb()

module.exports = PomodoremiCSV
