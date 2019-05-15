'use strict';

const Car = () => ({
  drive: () => {
    console.log('Driving...');
  },
  stop: () => {
    console.log('Stopping');
  },
});

function CarFactory(name) {
  let car = Object.assign(
    {},
    {name},
    {wheels: 4},
    Car()
  );

  // function vroom () {console.log('Loud exhaust sounds.')};

  return Object.freeze(car);
}

function MotorcycleFactory(name) {
  let motorcycle = Object.assign(
    {},
    {name},
    {wheels: 2},
    {wheelie},
    Car()
  );

  function wheelie () {console.log('Wheee!')};

  return Object.freeze(motorcycle);
}

module.exports = {CarFactory, MotorcycleFactory};