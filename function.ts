function add(a: number, b: number): number {
    return a + b;
}

function printResult(num: number): void {
    console.log('Result: ' + num);
}

printResult(add(1, 2));

let combineVal: (a: number, b: number) => number;

combineVal = add;

printResult(combineVal(3, 4));

// function addAndThen(a: number, b: number, cb: Function) {
//     const result = a + b;
//     cb(result);
// }

function addAndThen(a: number, b: number, cb: (res: number) => void) {
    const result = a + b;
    cb(result);
}

addAndThen(11, 2, res => {
    console.log(res);
});