var test = require('tape')
var Timer = require('./index')

test('Timer', function (t) {
  t.plan(2)
  var timer = Timer()
  timer.lapIt()
  timer.lapIt()
  var result = timer.stop()

  t.equal(result.length , 4)
  console.log(result[0])
  t.equal(result[0].Start , 0)
})
