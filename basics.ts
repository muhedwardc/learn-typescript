function add(a: number, b: number, isSquareResult: boolean, pre: string): string {
    let result = a + b;

    if (isSquareResult) {
        result*=result;
    }

    return !!pre ? `${pre} ${result}` : ''+result;
}

const n1 = 5, n2 = 2;

const result = add(n1, n2, true, 'Result is:');

console.log(result);
