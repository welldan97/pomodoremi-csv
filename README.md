# Pomodoremi-CSV

Simple CSV log for [Pomodoremi](https://github.com/welldan97/pomodoremi)

## Usage

It can be used as Pomodoremi module in config.coffee:

```coffee
PomodoremiCSV = require 'pomodoremi-csv'

module.exports = ->
  @modules.push new PomodoremiCSV
```
