const numbers = [1, 2, 3, 4, 5];
const nextNumbers = [6, 7, 8];
// numbers = [...numbers, ...nextNumbers];
numbers.push(...nextNumbers);

const person = {
    name: 'Ed',
    age: 22,
}

// const copiedPerson = person;
const copiedPerson = { ...person };

