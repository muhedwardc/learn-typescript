function Logger(constructor: Function) {
    console.log('Logging...');
    console.log(constructor);
}

@Logger
class Pet {
    type = 'cat';
    name = 'katty';

    constructor() {
        console.log('creating new pet...')
    }
}

const newPet = new Pet();
