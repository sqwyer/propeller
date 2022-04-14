import { User } from './user';
import { Task } from './tasks/task';
import { Label } from './labels/label';
import { v4 as uuid } from 'uuid';

class Project {
    public owner: User;
    public name: string;
    public tasks: Array<Task> = [];
    public members: Array<User> = [];
    public labels: Array<Label> = [];
    public id: string;

    constructor(name: string, owner: User) {
        this.owner = owner;
        this.name = name;
        this.id = uuid();
    }

    public getLabelFromString(label: string) {
        return this.labels.find(self => self.name === label) || null;
    }
}

export { Project };