function merge<T, U>(obj1: T, obj2: U) {
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
