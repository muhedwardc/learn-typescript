const addNumbers = (...numbers: number[]): number => {
    return numbers.reduce((res, val) => res + val, 0);
}

const addedNumbers = addNumbers(1, 2, 3, 4, 5, 6, 7, 8);
console.log(addedNumbers);
