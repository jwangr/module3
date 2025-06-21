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
    let matching = [];
    for (item of animals) {
        if (beginsWith.toLowerCase() === item.slice(0, beginsWith.length).toLowerCase()) {
            matching.push(item);
        }
    }
    return matching;
}

console.log(findMatchingAnimals('mee'));