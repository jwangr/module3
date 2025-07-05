//  e.g. 1, 1, 2, 3, 5, 8, 13, 21, 34, etc.
function increment() {
    // initiate the starting values
    let incrementor = 0;
    let num1 = 1;

    // the output is a function that returns the incremented num1, and changes the increment value
    return function () {
        console.log(num1);
        num1 += incrementor;
        incrementor = num1 - incrementor;
        return num1, incrementor;
    }
}

let printFibonnaci = increment(); // this should initiate num 1 = 1; increment = 0;
// and printFibonnaci becomes the return value, ie. function that increments num1 by 1; and sets the incre

let fibbonanza = setInterval( () => printFibonnaci(), 1000 ); // prints another Fibonnaci number every 1s

setTimeout( () => clearInterval(fibbonanza), 10*1000);