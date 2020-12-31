function Logger(logString: string) {
    return function(constructor: Function) {
        console.log(logString);
        console.log(constructor);
    }
}

function WithTemplate(template: string, hookId: string) {
    return function(constructor: any) {
        const hookEl = document.getElementById(hookId);
        const p = new constructor();

        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1')!.textContent = p.name;
        }
    }
}

// @Logger('LOGGING - PET')
@WithTemplate('<h1>Pet class</h1>', 'app')
class Pet {
    type = 'cat';
    name = 'katty';

    constructor() {
        console.log('creating new pet...')
    }
}

const newPet = new Pet();

function Log(target: any, propertyName: string | Symbol) {
    console.log('Property decorator!')
    console.log({ target, propertyName })
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log('Accessor decorator!')
    console.log({ target, name, descriptor })
}

function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
    console.log('Method decorator!')
    console.log({ target, name, descriptor })
}

function Log4(target: any, name: string | Symbol, position: number) {
    console.log('Parameter decorator!')
    console.log({ target, name, position })
}

class Product {
    @Log
    title: string
    private _price: number

    @Log2
    set price(val: number) {
        if (val > 0) {
            this._price = val;
        } else {
            throw new Error('Invalid price - should be positif');
        }
    }

    constructor(t: string, p: number) {
        this.title = t;
        this._price = p;
    }

    @Log3
    getPriceWithTax(@Log4 tax: number) {
        return this._price * (1 + tax);
    }
}
