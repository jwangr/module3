class Person {
    constructor(firstName, lastName, phoneNumber, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

    getFullName() {
        return this.firstName + " " + this.lastName;
    }
}

class Employee extends Person {
    constructor(firstName, lastName, phoneNumber, email, dept, salary) {
        // super is used to refer to the parent class, i.e. Person
        super(firstName, lastName, phoneNumber, email);
        this.dept = dept;
        this.salary=salary;
    }
}

class Customer extends Person {
    constructor(firstName, lastName, phoneNumber, email, cID, deliveryAddress) {
        super(firstName, lastName, phoneNumber, email);
        this.cID = cID;
        this.deliveryAddress = deliveryAddress;
    }
}

const emp1 = new Employee("Dav", "S", 0123456789, 'dav@example.com', "Accounts", 90000);
const c1 = new Customer("Peter", "S", 0498765432, 'peter@example.com', 1, 'Pizza Hut ');

console.log(emp1, c1);