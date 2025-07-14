// METHOD 1) e.g. 1, 1, 2, 3, 5, 8, 13, 21, 34, etc.
// function increment() {
//     // initiate the starting values
//     let incrementor = 0;
//     let num1 = 1;

//     // the output is a function that returns the incremented num1, and changes the increment value
//     return function () {
//         console.log(num1);
//         num1 += incrementor;
//         incrementor = num1 - incrementor;
//         return num1, incrementor;
//     }
// }

// let printFibonnaci = increment(); // this should initiate num 1 = 1; increment = 0;
// // and printFibonnaci becomes the return value, ie. function that increments num1 by 1; and sets the incre

// let fibbonanza = setInterval( () => printFibonnaci(), 1000 ); // prints another Fibonnaci number every 1s

// setTimeout( () => clearInterval(fibbonanza), 10*1000);

// // Method 2
// function printFibonacci() {
//     let first = 1;
//     second = 1;
//     console.log(first);
//     console.log(second);

//     setInterval(function printNext() {
//         let next = first + second;
//         console.log(next)
//         first = second;
//         second = next;
//     }, 1000)
// }

// printFibonacci();

// METHOD 3)
const fib = [];

function triggerFibonacci(numbers) {
    let count = 1;
    let writer = setInterval(() => { createFibonacci(count); count++; }, 1000);
    setTimeout(() => {
        clearInterval(writer)
    }, (numbers + 1) * 1000);
}

function createFibonacci(count) {
    // should return an array of '#count' Fibonacci numbers
    if (count == 1) {
        fib.push(1);
    }

    if (count > 1) {
        let prevNum = 0;
        fib.push(1); // fib[0] = 1
        for (let i = 1; i < count; i++) {
            fib[i] = fib[i - 1] + prevNum;
            prevNum = fib[i - 1];
        }
    }
    return console.log(fib[count - 1]);
} // returns the count-th number in the Fibonacci pattern

triggerFibonacci(10);