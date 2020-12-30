class User {
    firstName: string
    lastName: string;

    constructor(f: string, l: string) {
        this.firstName = f;
        this.lastName = l;
    }

    fullName(this: User /* this should refer to User */): string {
        return `${this.firstName} ${this.lastName}`
    }
}

const userEd = new User('Edward', 'Chakim')
console.log(userEd.fullName());

const userEdCopy = { fullName: userEd.fullName };
// console.log(userEdCopy.fullName()); --> this will error, because object doesnt contain firstName & lastName property

const userEdCopyFull = { firstName: 'Ed', lastName: 'ward', fullName: userEd.fullName };
console.log(userEdCopyFull.fullName()); // print `Ed ward`
