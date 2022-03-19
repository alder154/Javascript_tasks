/*Создать 2 объекта: animal и cat, объект animal добавить свойство move,
объект cat должен наследовать свойство move*/

let animal = {
  move: true,
};

let cat = Object.create(animal, {
  fly: {
    value: false,
  },
});

console.log(cat.move);
console.log(cat.fly);


//Сделать наследование классов
class Animal {
  constructor() { 
    (this.moves = true), 
    (this.speed = 10); 
  }
  kphToMph() {
    return console.log(`${this.speed} kph is ${this.speed / 1.6} mph`)
  }
}

class Reptile extends Animal {
  constructor(name) {
    super(name) 
    this.name = name;
  }
  swim() {
    return console.log(`${this.name} can swim!`);
  }
}

let croc = new Reptile("crocodile");

console.log(croc.name)
console.log(croc.speed)
console.log(croc.moves)
croc.kphToMph()
croc.swim()