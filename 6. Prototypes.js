let animal ={
    move: true,
};

let cat = Object.create(animal, {
    fly: {
        value: false,
        }
    }
);

console.log(cat.move);
console.log(cat.fly);