const Elevator = require('./elevator.js');
const Person = require('./person.js');

const elevator1 = new Elevator()
const helena = new Person("Helena", 5, 2)

// empieza el elevador a funcionar
elevator1.start(helena)
elevator1.call(helena)
