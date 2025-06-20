const sydney = {
  name: "Sydney",
  population: 5_121_000,
  state: "NSW",
  founded: "26 January 1788",
  timezone: "Australia/Sydney",
};

printObject(sydney);

function printObject(city) {
  for (key in city) {
    console.log(`${key.slice(0,1).toUpperCase()}${key.slice(1)}: ${city[key]}`);
  }
}