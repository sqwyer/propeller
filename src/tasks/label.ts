import { Label } from "../labels/label";
import { Task } from "./task";

function addLabel(self: Task, label: Label|string) {
    let labels = self.labels;
    let parent = self.parent;

    if (typeof label == 'string') label = parent.getLabelFromString(label);

    if(labels.includes(label)) {
        return 0;
    } else if(!parent.labels.includes(label)) {
        return 0;
    } else {
        labels.push(label);
        self.set('labels', labels);
        return 1;
    }
}
function removeLabel(self: Task, label: Label|string) {
    let labels = self.labels;
    let parent = self.parent;

    if (typeof label == 'string') label = parent.getLabelFromString(label);

    if(!labels.includes(label)) {
        return 0;
    } else if(!parent.labels.includes(label)) {
        return 0;
    } else {
        labels.splice(labels.indexOf(label), 1);
        self.set('labels', labels);
        return 1;
    }
}

export { addLabel, removeLabel }