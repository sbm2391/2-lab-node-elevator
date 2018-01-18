class Elevator {
  constructor(){
    this.floor      = 0;
    this.direction = "up";
    this.MAXFLOOR   = 10;
    this.MINFLOOR   = 0;
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
    if (this.floor < this.MAXFLOOR && this.direction === "up") {
      this.floorUp()
    } else if (this.floor === this.MINFLOOR) {
      this.direction = "up"
      this.floorUp()
    } else if (this.floor === this.MAXFLOOR) {
      this.direction = "down"
      this.floorDown()
    } else if (this.floor > this.MINFLOOR) {
      this.floorDown()
    } 
  }
  _passengersEnter() { }
  _passengersLeave() { }
  floorUp() { 
      this.floor++
  }
  floorDown() { 
      
      this.floor--
  }
  call() { }
  log() { 
    console.log(`Direction: ${this.direction} | Floor: ${this.floor}`)
  }
}

module.exports = Elevator;
