// Car
// make, model, vin
// getDescription

class Person {
    constructor(name = "Anonymous", age = 0) {
        this.name = name;
        this.age = age;
    }
    getDescripton() {
        return `${this.name} is ${this.age} years old`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescripton() {
        let description = super.getDescripton();
        description += ` has a major in ${this.major}`;
        return description;
    }
}

class Traveller extends Person {
    constructor(name, age, locaction) {
        super (name, age);
        this.locaction = location;
    }

    getDescripton() {
        let description = super.getDescripton();
        if (this.locaction) {
            description += ` and it is located in ${this.locaction}`;
        }
        return description;
    }
}

const me = new Person('Damian', 12);
console.log(me.getDescripton());

const other = new Student();
console.log(other.getDescripton());

const travel = new Traveller('Mark', 34, 'NY CITY');
console.log(travel.getDescripton());