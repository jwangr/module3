let car = {
    make: "Porsche", model: '911', year: 1964,
    description() { console.log(`This car is a ${this.make} ${this.model} from ${this.year}`); }
};


setTimeout(() => { car.description() }, 2000); //works - will still call the original car, because car2 is a clone and doesn't alter the orignal object

let car2 = { ...car, year: 1973 } // create a clone using spread syntax
car2.description();

// When a function is used as a callback, "this" is lost.
//  the bind() method has to be used to prevent losing this.
let describe = car.description.bind(car);
setTimeout(describe, 2000); //works

let car3 = { ... car, make: "Toyota"};
car3.description();