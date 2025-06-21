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