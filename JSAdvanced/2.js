function delayMsg(msg) {
    console.log(`This message will be printed after a delay: ${msg}`)
}
// setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
// setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
// setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
// delayMsg('#4: Not delayed at all')

// it will display #4, then #3, #2, #1

const delayMsg2 = (msg) => console.log(`This message will be printed after a delay: ${msg}`);

setTimeout(delayMsg2, 100, '#1: Delayed by 100ms');
setTimeout(delayMsg2, 20, '#2: Delayed by 20ms');
let timer3 = setTimeout(delayMsg2, 0, '#3: Delayed by 0ms');
setTimeout(delayMsg2, 15000, '#4: Delayed by 15 seconds');
delayMsg('#4: Not delayed at all');

clearTimeout(timer3);