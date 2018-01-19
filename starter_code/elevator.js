class Elevator {
  constructor(){
    this.floor      = 0;
    this.direction = "up";
    this.MAXFLOOR   = 10;
    this.MINFLOOR   = 0;
    //properties to keep a track of everyone
    this.requests   = [];
    this.watingList = [];
    this.destinations = [];
  }
  //Función para que el elevador empiece a subir y bajar
  start(person) { 
    let that = this
    let interval = setInterval(function(){that.update(person)}, 1000)
  }
  //Función que detiene el elevador
  stop() { 
    clearInterval(this.interval)
  }

  update(person) { 
 
    if (this.requests.length > 0) {
      this.log()
      console.log(this.requests)
      console.log(`destinations: ${this.destinations}`)
      console.log(`watingList: ${this.watingList}`)
      console.log(this.floor)
      if (this.destinations.length > 0)  {
        if (this.floor > this.destinations[0]) {
          this.floorDown()
        } else if (this.floor < this.destinations[0]) {
          this.floorUp()
        } else {
          this._passengersLeave(person)
        }
      } else {
        if (this.floor > this.watingList[0]) {
          this.floorDown()
        } else if (this.floor < this.watingList[0]) {
          this.floorUp()
        } else {
          this._passengersEnter(person)
        }
      }

    } else {
      this.stop()
    }
  }
  _passengersEnter(person) { 
    this.requests.shift()
    this.requests.push(person.destinationFloor)
    this.destinations.push(person.destinationFloor)
    this.watingList.shift()
    console.log(`${person.name} has enter the elevator`)
  }
  _passengersLeave(person) { 
    this.destinations.shift()
    this.requests.shift()
    console.log(`${person.name} has left the elevator`)
  }

  //Función para subir de piso en piso
  floorUp() { 
      this.floor++
  }
  //Función para bajar de piso en piso
  floorDown() { 
      this.floor--
  }

  call(person) { 
    this.requests.push(person.originFloor)
    this.watingList.push(person.originFloor)
  }

  //estatus del piso y dirección
  log() { 
    console.log(`Direction: ${this.direction} | Floor: ${this.floor}`)
  }
}

module.exports = Elevator;
