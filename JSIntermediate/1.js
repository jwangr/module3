console.log(ucFirstLetters("los angeles") ) //Los Angeles 
console.log(ucFirstLetters("new zealand"))
console.log(ucFirstLetters("she sells sea shells on the sea shore."))


function ucFirstLetters(string) {
    let words = string.split(" "); // [ 'los', 'angeles' ]
    let finalText = "";
    for (item of words) {
        item = item.slice(0,1).toUpperCase() + item.slice(1);
        finalText += `${item} `;
    }
    return finalText.trim();
}

// Using reg-ex
// function ucFirstLetters(str) {
//   return str.replace(/\b\w/g, char => char.toUpperCase());
// }
// console.log(ucFirstLetters("i love dogs and cats")); //I Love Dogs And Cats