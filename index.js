/* Simple Timer module.
 * -------------------------
 */

function Timer () {
  var startTime = Date.now()
  var pitStops = [].push({'Start': 0})

  var time
  var lap = {}
  return {
    lapIt: function (message) {
      time = Date.now() - startTime
      startTime = time
      lap[message] = time
      pitStops.push(lap)
    },

    stop: function () {
      time = Date.now() - startTime
      pitStops.push({'End': time})
      return pitStops
    }
  }
}

module.exports = Timer
