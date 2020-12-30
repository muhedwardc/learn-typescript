enum GenderEnum { 
    male = 'male', 
    female ='female' 
};

interface GenderInterface {
    readonly gender: GenderEnum
}

interface PersonInterface extends GenderInterface {
    name: string;
    age: number;
    job?: string; // optional
    greet(phrase: string): string;
}

let person1: PersonInterface;

person1 = {
    name: 'Edward',
    age: 22,
    gender: GenderEnum.male,
    greet: (phrase: string) => phrase
}

// person1.greet('Hello world!'); 

class PersonClass implements PersonInterface, GenderInterface {
    job?: string;

    constructor(public name: string, public age: number, public gender: GenderEnum, public greet: (phrase: string) => string, job?: string) {
        if (job) {
            this.job = job;
        }
    }

    greetPerson(this: PersonClass, prefix: string) {
        return `${prefix} ${this.greet(this.name)}`
    }
}

const person1Class = new PersonClass('Edward', 22, GenderEnum.male, (phrase: string) => phrase);
console.log(person1Class.greetPerson('Hello'));

interface GreetFn {
    (phrase: string, name: string): string
}

let greetMe: GreetFn;
greetMe = (prhase: string, name: string) => {
    return `${prhase} ${name}`;
}
