class Elevator {
  constructor(){
    this.floor      = 0;
    this.direction = "up";
    this.MAXFLOOR   = 10;
    this.requests   = [];
  }

  start() { 
    let that = this
    let interval = setInterval(function(){that.update()}, 1000)
  }
  stop() { 
    clearInterval(this.interval)
  }
  update() { 
    this.log()
  }
  _passengersEnter() { }
  _passengersLeave() { }
  floorUp() { }
  floorDown() { }
  call() { }
  log() { 
    console.log(`Direction: ${this.direction} | Floor: ${this.floor}`)
  }
}

module.exports = Elevator;
