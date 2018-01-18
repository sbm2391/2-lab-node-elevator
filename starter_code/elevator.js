class Elevator {
  constructor(){
    this.floor      = 0;
    this.direction = "up";
    this.MAXFLOOR   = 10;
    this.MINFLOOR   = 0;
    //properties to keep a track of everyone
    this.requests   = [];
    this.watingList = [];
    this.passengers = [];
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
   
  if (this.requests.length > 0) {
      this.log()
      
      console.log("hola")
      let that = this
      this.watingList.forEach(function(person){
      if (person.originFloor === that.floor) {
            this._passengersEnter(person)
        }
      })
      
      this.passengers.forEach(function(person){
        console.log(that.floor)
        if (person.destinationFloor === this.floor) {
          this._passengersLeave(person)
        }
      })

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
    } else {
       this.stop()
    }
  }
  _passengersEnter(person) { 
    this.passengers.push(person.destinationFloor)
    this.watingList.shift()
    this.requests.push(person.destinationFloor)
    this.requests.shift()
    console.log(`${person.name} has enter the elevator`)
  }
  _passengersLeave(person) { 
    this.passengers.shift()
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
