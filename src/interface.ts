interface PersonInterface {
    name: string;
    age: number;
    greet(phrase: string): string;
}

let person1: PersonInterface;

person1 = {
    name: 'Edward',
    age: 22,
    greet: (phrase: string) => phrase
}

// person1.greet('Hello world!'); 

interface FullName {
    firstName: string;
    lastName: string;
    getFullName(phrase: string): string;
}

class PersonClass implements PersonInterface {
    constructor(public name: string, public age: number, public greet: (phrase: string) => string) {}

    greetPerson(this: PersonClass, prefix: string) {
        return `${prefix} ${this.greet(this.name)}`
    }
}

const person1Class = new PersonClass('Edward', 22, (phrase: string) => phrase);
console.log(person1Class.greetPerson('Hello'));
