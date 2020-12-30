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