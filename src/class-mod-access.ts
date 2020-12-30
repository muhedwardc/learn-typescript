class Person {
    // firstName: string;
    // public /* default*/ lastName: string;
    private hobbies: string[] = [];

    constructor(
        private readonly id: number,
        public firsName: string, 
        public lastName: string,
    ) {
        // this.firstName = f;
        // this.lastName = l;
    }

    fullName(this: User /* this should refer to User */): string {
        return `${this.firstName} ${this.lastName}`
    }

    addHobby(hobby: string) {
        this.hobbies.push(hobby)
    }

    getHobbiesStr() {
        return this.hobbies.join(', ');
    }

    changeId(newId: number): void {
        // this.id = newId; // will fail, id is readonly
    }
}

const newPerson = new Person(0, 'Edward', 'Chakim');

newPerson.addHobby('running (i wish)');
newPerson.addHobby('eating');
newPerson.getHobbiesStr(); // return 'running (i wish), eating'
// newPerson.hobbies; --> cannot access, it's private!!
