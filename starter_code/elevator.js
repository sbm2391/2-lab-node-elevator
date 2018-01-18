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
      //imprime el piso y dirección    
      this.log()
      
      /* convierte cada valor de la array en la variable person*/
      let that = this
      this.requests.forEach(function(person){
      //condició para que entre una persona
        if (person.originFloor === that.floor) {
              that._passengersEnter(person)
          }
      //condició para que salga una persona
        if (person.destinationFloor === that.floor) {
          that._passengersLeave(person)
        }
      })
      
      this.requests.forEach(function(person){
       // console.log(that.floor)
      //condició para que salga una persona
        
      })

      // función para que el elevador suba y baje
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
    this.requests.push(person)
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
    this.requests.push(person)
    this.watingList.push(person.originFloor)
  }

  //estatus del piso y dirección
  log() { 
    console.log(`Direction: ${this.direction} | Floor: ${this.floor}`)
  }
}

module.exports = Elevator;
