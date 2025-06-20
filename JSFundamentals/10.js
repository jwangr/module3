function Person(name, age) {
  this.name = name;
  this.age = age;
  this.human = true;
  this.canDrive = age >= 16 ? "yes" : "no";
}

let smeagol = new Person("Smeagol", 589);
let bilbo = new Person("Bilbo Baggins", 111);

console.log(`${JSON.stringify(smeagol)} \n${JSON.stringify(bilbo)}`);

function PersonClass(name, color, dob) {
  this.name = name;
  this.color = color;
  this.tree = true;
  this.DOB = dob.toString();
}

let treebeard = new PersonClass("Treebeard", "brown", new Date());
console.log(treebeard);
