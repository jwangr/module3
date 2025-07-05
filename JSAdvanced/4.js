//  e.g. 1, 1, 2, 3, 5, 8, 13, 21, 34, etc.
let increment = 0;
printFibonnaci.counter = 1;
function printFibonnaci() {
    printFibonnaci.counter += increment;
    console.log(printFibonnaci.counter);
    increment = printFibonnaci.counter;
}


let fibbonanza = setInterval( () => printFibonnaci(), 1000 ); // prints another Fibonnaci number every 1s
setTimeout( () => clearInterval(fibbonanza), 10*1000);