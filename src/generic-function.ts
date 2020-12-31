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
