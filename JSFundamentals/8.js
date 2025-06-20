const sydney = {
  name: "Sydney",
  population: 5_121_000,
  state: "NSW",
  founded: "26 January 1788",
  timezone: "Australia/Sydney",
};

const venice = {
  name: "Venice",
  population: 249_466,
  country: "Italy",
  region: "Veneto",
  founded: "March 25, 421 AD",
  timezone: "Central European Time"
}
printObject(sydney);
printObject(venice);

function printObject(city) {
  for (key in city) {
    console.log(`${key.slice(0,1).toUpperCase()}${key.slice(1)}: ${city[key]}`);
  }
}

