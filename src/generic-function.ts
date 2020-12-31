function merge<T extends object, U extends object>(obj1: T, obj2: U) {
    return Object.assign(obj1, obj2);
}

const mergedData = merge(
    {
        name: 'Edward',
        gender: 'male'
    },
    { age: 22 }
)

console.log(mergedData.name);

// const mergedDataInvalid = merge({name: 'Edward'}, 20); // passing number as non object will fail

interface Lengthy {
    length: number;
}

function countAndDesc<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'No value!';
    if (element.length === 1) {
        descriptionText = `Got 1 element.`;
    } else if (element.length > 1) {
        descriptionText = `Got ${element.length} elements.`;
    }
    return [element, descriptionText];
}

// console.log(countAndDesc(10)) // number has no length prop
console.log(countAndDesc('Hi!'));
console.log(countAndDesc(['Test', 'Bos']));