"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project = void 0;
class Project {
    constructor(name, owner) {
        this.tasks = [];
        this.members = [];
        this.labels = [];
        this.owner = owner;
        this.name = name;
    }
    getLabelFromString(label) {
        return this.labels.find(self => self.name === label) || null;
    }
}
exports.Project = Project;
