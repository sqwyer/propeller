"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Content = void 0;
class Content {
    constructor(label, content) {
        this.label = label;
        this.content = content;
    }
    set(field, value) {
        this[field] = value;
    }
}
exports.Content = Content;
