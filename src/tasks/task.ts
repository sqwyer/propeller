import { v4 as uuid } from 'uuid';

import { Label } from "../labels/label";
import { Project } from "../project";
import { User } from "../user";
import { Content } from "./content";

import { assign, unassign } from './assign';
import { addLabel, removeLabel } from './label';

class Task {
    public name: string;
    public note: string;
    public assigned: Array<User> = [];
    public labels: Array<Label> = [];
    public content: Array<Content> = [];
    public parent: Project;
    public id;

    constructor(name: string, note: string, parent: Project) {
        this.name = name;
        this.note = note;
        this.parent = parent;
        this.id = uuid();
    }

    public set(field: string, value: any) {
        this[field] = value;
    }

    public assign(user: User) { assign(this, user) }
    public unassign(user: User) { unassign(this, user) }
    public addLabel(label: Label|string) { addLabel(this, label) }
    public removeLabel(label: Label|string) { removeLabel(this, label) }
    public addContentField(field: string, content: string) {}
    public removeContentField(field: string) {}
    public setDueDate(due: Date) {}
    public removeDueDate() {}
}

export { Task };