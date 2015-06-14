LOG_PATH = "#{process.env.HOME}/.pomodoremi/log.csv"

fs = require 'fs'

class PomodoremiCSV
  constructor: (@logPath = LOG_PATH) ->
  stop: (interval, delay, cb) ->
    data = [
      interval.name,
      interval.startTime,
      interval.stopTime
      interval.tags.join(' ')
    ]
    line ='"' + data.join('", "') + '"'
    fs.appendFile LOG_PATH, line, (err) ->


module.exports = PomodoremiCSV
