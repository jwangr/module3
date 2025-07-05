let salaries = {
"Timothy" : 35000,
"David" : 25000,
"Mary" : 55000,
"Christina" : 75000,
"James" : 43000
};

let salaryMap = new Map(Object.entries(salaries));

function sumSalaries(salaries) {
    let sum = 0;
    for (let salary of salaryMap.values()) {
        sum += salary;
    }
    return sum;
}

function topEarner(salaries) {
    const highestSalaries = Object.values(salaries).sort().reverse();
    const highestEarnings = highestSalaries[0];
    for (let salary of salaryMap.entries()) {
        if (salary[1] == highestEarnings) {return salary[0]};
    }
}

console.log(sumSalaries(salaries));

console.log(topEarner(salaries));