function basicAdd(a: number, b: number, isSquareResult: boolean, pre: string): string {
    let result = a + b;

    if (isSquareResult) {
        result*=result;
    }

    return !!pre ? `${pre} ${result}` : ''+result;
}

const basicN1 = 5, basicN2 = 2;

const result = basicAdd(basicN1, basicN2, true, 'Result is:');

console.log(result);
