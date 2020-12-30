abstract class Department {
    static hello = 'HELLO';
    // private readonly id: string;
    // private name: string;
    protected employees: string[] = [];

    constructor(protected readonly id: string, public name: string) {
        // this.id = id;
        // this.name = n;

        // access static
        // console.log(this.hello) --> invalid
        // console.log(Department.hello)
    }

    static createEmployee(name: string) {
        return { name: name };
    }

    abstract describe(this: Department): void;

    addEmployee(employee: string) {
        // validation etc
        // this.id = 'd2';
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITDepartment extends Department {
    admins: string[];
    constructor(id: string, admins: string[]) {
        super(id, 'IT');
        this.admins = admins;
    }

    // should added because its abstract
    describe(this: ITDepartment) {
        console.log(`IT: ${this.id}`);
    }
}

class AccountingDepartment extends Department {
    private lastReport: string;
    private static instance: AccountingDepartment;

    get mostRecentReport() {
        if (this.lastReport) {
        return this.lastReport;
        }
        throw new Error('No report found.');
    }

    set mostRecentReport(value: string) {
        if (!value) {
        throw new Error('Please pass in a valid value!');
        }
        this.addReport(value);
    }

    private constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }

    static getInstance() {
        if (AccountingDepartment.instance) {
            return this.instance;
        }

        this.instance = new AccountingDepartment('d2', []);
        return this.instance;
    }

    addEmployee(name: string) {
        if (name === 'Ed') {
        return;
        }
        this.employees.push(name);
    }

    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    printReports() {
        console.log(this.reports);
    }


    // should added because its abstract
    describe(this: AccountingDepartment) {
        console.log(`ACcounting: ${this.id}`);
    }
}

const newEmployee = Department.createEmployee('Edward');
console.log(`${Department.hello} ${newEmployee.name}`);

const it = new ITDepartment('d1', ['Ed']);

it.addEmployee('Ed');
it.addEmployee('Ward');

// it.employees[2] = 'Anna';

it.describe();
it.name = 'NEW NAME';
it.printEmployeeInformation();

console.log(it);

// const accounting = new AccountingDepartment('d2', []);
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();
// acounting2 will be the same as accounting

accounting.mostRecentReport = 'Year End Report';
accounting.addReport('Something went wrong...');
console.log(accounting.mostRecentReport);

accounting.addEmployee('Ed');
accounting.addEmployee('Ward');

accounting.printReports();
accounting.printEmployeeInformation();

// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };

// accountingCopy.describe();