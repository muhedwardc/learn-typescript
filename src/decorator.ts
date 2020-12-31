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
