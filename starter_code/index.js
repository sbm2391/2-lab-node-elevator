const Elevator = require('./elevator.js');
const Person = require('./person.js');

const elevator1 = new Elevator()
const bet = new Person("Bet", 3, 7)
const helena = new Person("Helena", 5, 2)

// empieza el elevador a funcionar
elevator1.start()
// la primera persona llama al elevador
elevator1.call(bet)
