//now # Ugly Timer

 Another ugly timer for finding the bottleneck
 

### Installation

 *with npm*
 
  `npm install ugly-timer`
  
### Example

	var Timer = require('ugly-timer')
	var timer = Timer()
    
    //call some heavy function
    heavyFunction() 
    timer.lapIt('heavy function')
    
    anotherHeavyFunction().then((response) => { 
    		timer.lapIt()
           })
    
    
    var timings = timer.stop()
    
    //console.log(timings) 
    // [{ 'Start': 0}, {heavyFunction: 14}, {'another Heavy function' : 54} , {'End: 55}]
