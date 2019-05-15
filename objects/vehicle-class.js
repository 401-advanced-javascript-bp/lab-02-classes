'use strict';

//Car class
class Car {

  //when creating a new car, store it's name
  constructor(name, wheels){
    this.name = name;
    this.wheels = wheels || 4; //always has the number of wheels you assign it, or 4
  }

  //All cars can be driven. This will be a prototype method.
  drive() {
    console.log('Driving...');
  }
  stop() {
    console.log('Stopping');
  }
}
//Motorcylces are a type of car (extends)
class Motorcycle extends Car {

  constructor(name){
    super(name, 2);
  }

  //Only motorcycles go vroom. This will be a prototype method.
  wheelie() {
    console.log('Wheee!');
  }

  // //Calling the Car drive() method when motorcycles go like a BatOuttaHell()
  // BatOuttaHell(){
  //   super.drive();
  // }
}

module.exports = {Car, Motorcycle};