const names: Array<string> = ['Edward', 'Chakim']; // string[]

const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('hello');
    }, 2000);
});

promise.then(data => {
    data.split(' ');
})
