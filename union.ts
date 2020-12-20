type strOrNumber = number | string;
type resultType = 'number' | 'string';

function combine(a: strOrNumber, b: strOrNumber, resultType: resultType) {
    if (typeof a === 'number' && typeof b === 'number' || resultType === 'number') {
        return +a + +b;
    }
    return a.toString() + b.toString();
}

const n1 = 5, n2 = 2;

const resultNum = combine(1, 2, 'number');
const resultStr = combine('abc', 'def', 'string');

console.log({
    resultNum,
    resultStr
});
