// using reg-exp
console.log(camelCase('margin-left')) // marginLeft 
console.log(camelCase('background-image')) // backgroundImage 
console.log(camelCase('display')) // display

function camelCase(cssProp) {
    let alteredText = cssProp.replace(/-[a-z]/g, (x) => x.toUpperCase());
    return alteredText.replace(/-/g, "");
}

// using For loop and array.join() method)
console.log(camelCase2('margin-left')) // marginLeft 
console.log(camelCase2('background-image')) // backgroundImage 
console.log(camelCase2('display')) // display

function camelCase2(cssProp) {
    const myArray = cssProp.split("-");

    for (index in myArray) {
        if (index != 0) {
            let text = myArray[index];
            myArray[index] = text.slice(0,1).toUpperCase() + text.slice(1); 
        }
    }
    return myArray.join("");
}

