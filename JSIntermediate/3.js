const animals = ['Tiger', 'Giraffe'];
animals.push('Zebra', 'Meerkat');
animals.unshift('Rhino', 'Penguin');
animals.sort()

console.log(animals);

function replaceMiddleAnimal(newValue) {
    let middle_index = Math.round(animals.length / 2) - 1;
    animals[middle_index] = newValue;
    return animals;
}

console.log(replaceMiddleAnimal('Lemur'));

function findMatchingAnimals(beginsWith) {
    let pattern = /^beginsWith/gi;
    for (item of animals) {
        if (item.match(pattern)) {
            newArray.push(item);
            console.log(item);
        }
    }
}

findMatchingAnimals('Mee');