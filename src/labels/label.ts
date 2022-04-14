import { v4 as uuid } from 'uuid';

class Label {
    public name: string;
    public id;
    constructor(name: string) {
        this.name = name;
        this.id = uuid();
    }

    set(field: string, value: any) {
        this[field] = value;
    }
}

export { Label };