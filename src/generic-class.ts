class DataStorage<T extends string | number | boolean> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        const index = this.data.indexOf(item);
        if (index > -1) {
            this.data.splice(this.data.indexOf(item), 1);
        }
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
// textStorage.addItem(10); // only string
textStorage.addItem('Muhammad');
textStorage.addItem('Edward');
textStorage.removeItem('Edward');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();
// objStorage.addItem({ name: 'Edward' });
// objStorage.addItem({ name: 'Chakim' });
// objStorage.removeItem({ name: 'Edward' });
// console.log(objStorage.getItems());
