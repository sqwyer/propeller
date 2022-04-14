"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
const assign_1 = require("./assign");
const label_1 = require("./label");
class Task {
    constructor(name, note, parent) {
        this.assigned = [];
        this.labels = [];
        this.content = [];
        this.name = name;
        this.note = note;
        this.parent = parent;
    }
    set(field, value) {
        this[field] = value;
    }
    assign(user) { (0, assign_1.assign)(this, user); }
    unassign(user) { (0, assign_1.unassign)(this, user); }
    addLabel(label) { (0, label_1.addLabel)(this, label); }
    removeLabel(label) { (0, label_1.removeLabel)(this, label); }
    addContentField(field, content) { }
    removeContentField(field) { }
    setDueDate(due) { }
    removeDueDate() { }
}
exports.Task = Task;
