"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Label = void 0;
class Label {
    constructor(name) {
        this.name = name;
    }
    set(field, value) {
        this[field] = value;
    }
}
exports.Label = Label;
