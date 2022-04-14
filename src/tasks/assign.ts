import { Project } from "../project";
import { User } from "../user";
import { Task } from "./task";

function assign(self: Task, user: User) {
    let assigned: Array<User> = self.assigned;
    let parent: Project = self.parent;

    if(assigned.includes(user)) {
        return 0;
    } else if(!parent.members.includes(user) && parent.owner != user) {
        return 0;
    } else {
        assigned.push(user);
        self.set('assigned', assigned);
        return 1;
    }
}

function unassign(self: Task, user: User) {
    let assigned: Array<User> = self.assigned;
    let parent: Project = self.parent;

    if(!assigned.includes(user)) {
        return 0;
    } else if(!parent.members.includes(user) && parent.owner != user) {
        return 0;
    } else {
        assigned.splice(assigned.indexOf(user), 1);
        self.set('assigned', assigned);
        return 1;
    }
}

export { assign, unassign };