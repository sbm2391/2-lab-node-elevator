class Elevator {
  constructor(){
    this.floor      = 0;
    this.direction = "up";
    this.MAXFLOOR   = 10;
    this.MINFLOOR   = 0;
    this.requests   = [];
  }
  //Función para que el elevador empiece a subir y bajar
  start() { 
    let that = this
    let interval = setInterval(function(){that.update()}, 1000)
  }
  //Función que detiene el elevador
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
  //Función para subir de piso en piso
  floorUp() { 
      this.floor++
  }
  //Función para bajar de piso en piso
  floorDown() { 
      this.floor--
  }

  call(person) { 
    this.requests.push(person)
  }
  //estatus del piso y dirección
  log() { 
    console.log(`Direction: ${this.direction} | Floor: ${this.floor}`)
  }
}

module.exports = Elevator;
