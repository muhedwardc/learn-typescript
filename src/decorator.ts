function Logger(logString: string) {
    return function(constructor: Function) {
        console.log(logString);
        console.log(constructor);
    }
}

@Logger('LOGGING - PET')
class Pet {
    type = 'cat';
    name = 'katty';

    constructor() {
        console.log('creating new pet...')
    }
}

const newPet = new Pet();
