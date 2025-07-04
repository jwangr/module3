const phoneBookABC = new Map() //an empty map to begin with
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')

const phoneBookDEF = new Map();
phoneBookDEF.set('Darrel', '0412345678')
phoneBookDEF.set('Earl', '0487654321')
phoneBookDEF.set('Frank', '0465748312')

phoneBookABC.set('Caroline', '0456473829')

console.log(phoneBookABC, phoneBookDEF);

function printPhoneBook(contacts) {
    let arrayForm = Array.from(contacts);
    return arrayForm.join("\n")
}

console.log(`Printed contacts: \n` + printPhoneBook(phoneBookABC))

let phoneBook = new Map();
for (let contact of phoneBookABC.entries()) {
    phoneBook.set(contact);
}
for (let contact of phoneBookDEF.entries()) {
    phoneBook.set(contact);
}
console.log(phoneBook);