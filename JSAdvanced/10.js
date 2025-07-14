import fetch from 'node-fetch'
globalThis.fetch = fetch
function fetchURLData(url) {
    let fetchPromise = fetch(url)
        .then(response => {
            if (response.status === 200) { return response.json(); }
            else { throw new Error(`Request failed with status ${response.status}`); }
        });
    return fetchPromise;
}
fetchURLData('https://jsonplaceholder.typicode.com/todos/1')
    .then(data => console.log(data))
    .catch(error => console.error(error.message));

async function fetchURLData2(url) {
    try {
      let fetchPromise = await fetch(url)
      .then((response) => {return response.JSON})
      return fetchPromise;
    } catch (error) {
        console.log("Error with fetching from URL")
        return error;
    }
}
let message = fetchURLData2('blahbblahblah')
console.log(message);