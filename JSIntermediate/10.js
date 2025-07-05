const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString())
console.log(today.getHours() + ' hours have passed so far today')

const totalMinutes = today.getHours() * 60 + today.getMinutes();
console.log(totalMinutes + ' minutes have passed so far today');

const totalSeconds = today.getHours() * 60 * 60 + today.getMinutes() * 60 + today.getSeconds();
console.log(totalSeconds + ' seconds have passed so far today');

const myAge = new Date('1990-10-12');

const age = today - myAge;;
let ageFormatted = new Date(age);
console.log(ageFormatted);

console.log(`My age is ${ageFormatted.getFullYear() - 1970} years, ${ageFormatted.getMonth()} months and ${ageFormatted.getDate()} days.`)

function daysInBetween(date1, date2) {
    const differenceMS = date1 - date2;
    const differenceDays = differenceMS / 1000 / 60 / 60 / 24;
    return Math.round(differenceDays);
}

console.log(daysInBetween(today, myAge) + ' days');