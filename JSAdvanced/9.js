// randomDelay() that delays execution for a random amount of time (between 1 and 20 seconds) 
// and returns a promise we can use via .then(), as in the starter code below
function randomDelay() {
    // your code - delay has to be < 20000 ms
    let delay = Math.ceil(Math.random() * 20000);
    const response = new Promise((resolve, reject) => {
        if (delay % 2 == 0) {setTimeout(() => resolve(`${delay} is an even number - accepted.`), delay)}
        else (setTimeout(() => reject(`${delay} seconds is an odd number`), delay))
    })
    return response;
}

randomDelay().then(
    (response) => console.log('There appears to have been a delay.', response)
)
.catch((error) => console.log(`There appears to be an error: ${error}`))