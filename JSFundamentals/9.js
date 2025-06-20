let teamSports = ["Hockey", "Cricket", "Volleyball"];
let dog1 = "Marco";
let cat1 = { name: "Fluffy", breed: "Siberian" };

let moreSports = teamSports;
moreSports.push("Soccer");
moreSports.unshift("Badminton");

console.log(
  `Arrays, i.e. objects, are copied by reference. \nmoreSports: ${moreSports}. \nteamSports: ${teamSports}\n`
);

let dog2 = dog1;
dog2 = "Polo";
console.log(
  `Primative values are copied by value. \n${dog1} ${dog2}\n`
);

let cat2 = cat1;
cat2.name = "Dobby";
console.log(
  `Objects are copied by reference. \ncat1: ${JSON.stringify(cat1)} \ncat2:${JSON.stringify(cat2)} \n`
);

const moreSports2 = [];
for (index in teamSports) {
    moreSports2[index] = teamSports[index];
}
moreSports2.push("Tennis");
moreSports2.unshift("Cycling");
console.log(
  `Arrays, i.e. objects, can be copied with "for loops" to duplicate their values. \nmoreSports2: ${moreSports2}. \nteamSports: ${teamSports}\n`
);

const cat3 = {...cat1};
cat3.name = "Garfield";
cat3.breed = "Tabby";
console.log(
  `Objects can be shallow copied to duplicate values. \ncat1: ${JSON.stringify(cat1)} \ncat3:${JSON.stringify(cat3)} \n`
);
