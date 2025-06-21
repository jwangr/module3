console.log(truncate("This text will be truncated if it is too long", 25)); 
// This text will be truncat...

// normal declaration
function truncate(str, max) {
    if (str.length > max) {
        return `${str.slice(0, max)}...`;
    }
    else {
        return str;
    }
}

// function expression and conditional operator
let truncate2 = (str,max) => str.length > max ? `${str.slice(0, max)}...` : str;
console.log(truncate2("This text will be truncated if it is too long", 25)); 