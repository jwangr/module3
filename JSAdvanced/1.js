function makeCounter(startFrom, incrementBy) {
    let currentCount = startFrom;
    return function () {
        currentCount += incrementBy;
        console.log(currentCount)
        return currentCount;
    };
}
let counter1 = makeCounter(3, 0.5);
counter1(); // 3.5
counter1(); // 4

let counter2 = makeCounter(10, 20);
counter2(); // 30