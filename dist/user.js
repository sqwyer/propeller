"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(id) {
        this.id = id;
    }
    set(field, value) {
        this[field] = value;
    }
}
exports.User = User;
