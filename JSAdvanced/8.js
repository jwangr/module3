// Q1] Using the following starter code, create a decorator function to validate function arguments as strings. Test it by decorating the given orderItems function below.
function orderItems(...itemName) {
    let stringofItems = [];
    for (item of itemName) {
        stringofItems.push(item);
    }
    return `Order placed for: ${stringofItems.join(", ")}`;
}

// create a decorated version of the original function 
const validatedOrderItem = validateStringArg(orderItems);

function validateStringArg(orderItems) {
    return function (...itemName) {
        for (item of itemName) {
            if (typeof item != "string") {
                return "Invalid item name found - must input string values only!"
            }
        }
        let result = orderItems(...itemName)
        return result;
    }
}

console.log(validatedOrderItem("Apple Watch", "Apple Phone", "Apple fruit")); // should run the function
console.log(validatedOrderItem(123)); // should throw an error


// Q2] You have a function greet(name) that returns a greeting string. Write a decorator logCall that wraps any function and logs:
function greet(name) {
    return `Hello, ${name}!`;
}

const loggedGreet = logCall(greet);

function logCall(greet) {
    return function (name) {
        let result = greet(name);
        return `Calling greet with arguments: ${name}. Returned: ${result}`
    }
}
console.log(loggedGreet("Alice")); // Calling greet with arguments: Alice. Returned: Hello, Alice!

// Q3] Create a decorator limitCalls(fn, maxCalls) that wraps a function and only allows it to be called a certain number of times. After that, it should return "Rate limit exceeded".
function getData() {
    return "Fetching data...";
}

const limitedGetData = limitCalls(getData, 2);

function limitCalls(getData, maxCalls) {
    let counter = 1;
    return function () {
        if (counter <= maxCalls) {
            let result = getData();
            counter++;
            return result;
        }
        else {
            let result = "Rate limit exceeded";
            return result;
        }

    }
}

console.log(limitedGetData()); // "Fetching data..."
console.log(limitedGetData()); // "Fetching data..."
console.log(limitedGetData()); // "Rate limit exceeded"