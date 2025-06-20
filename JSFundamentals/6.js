const westley = { name: "Westley", numFingers: 5 };
const rugen = { name: "Count Rugen", numFingers: 6 };

const inigo = {
  firstName: "Inigo",
  lastName: "Ogini",
  greeting(person) {
    let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
    console.log(greeting + this.getCatchPhrase());
  },
  getCatchPhrase() {
    return "Nice to meet you.";
  },
};

inigo.greeting(westley) 
inigo.greeting(rugen) 