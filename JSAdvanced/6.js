let animal = { eats: true, sleeps: true, legs: 4, mammal: true }; // inherits from Object prototype
let animalPrototype = Object.getPrototypeOf(animal); // recommended way to get prototype
console.log(animalPrototype); // BUT printing it via console.log is incomplete
console.log(Object.getOwnPropertyNames(animalPrototype)); // prints all prototype (Object) properties
console.log(animalPrototype.isPrototypeOf(Object));
console.log(animalPrototype.propertyIsEnumerable());

let rabbit1 = { jumps: true };
Object.setPrototypeOf(rabbit1, animal);

console.log(Object.getOwnPropertyNames(Function)); // [ 'length', 'name', 'prototype' ]
 // [ 'length', 'name', 'prototype' ]

Function.prototype.delay = function (milliseconds) {
    let delayed = this(arguments);
    return () => setTimeout(delayed(arguments), milliseconds);
}

console.log(Object.getOwnPropertyNames(Function.prototype));


function multiply(a, b) { console.log( a * b ); }
multiply.delay(2000)(5,5); // prints 25 after 500 milliseconds