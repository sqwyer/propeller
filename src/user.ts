import { v4 as uuid } from 'uuid';

class User {
    public id: string;
    public parent: any;
    constructor(parent: any) {
        this.parent = parent;
        this.id = uuid();
    }

    set(field: string, value: any) {
        this[field] = value;
    }
}

export { User }