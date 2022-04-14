"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unassign = exports.assign = void 0;
function assign(self, user) {
    let assigned = self.assigned;
    let parent = self.parent;
    if (assigned.includes(user)) {
        return 0;
    }
    else if (!parent.members.includes(user) && parent.owner != user) {
        return 0;
    }
    else {
        assigned.push(user);
        self.set('assigned', assigned);
        return 1;
    }
}
exports.assign = assign;
function unassign(self, user) {
    let assigned = self.assigned;
    let parent = self.parent;
    if (!assigned.includes(user)) {
        return 0;
    }
    else if (!parent.members.includes(user) && parent.owner != user) {
        return 0;
    }
    else {
        assigned.splice(assigned.indexOf(user), 1);
        self.set('assigned', assigned);
        return 1;
    }
}
exports.unassign = unassign;
