"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeLabel = exports.addLabel = void 0;
function addLabel(self, label) {
    let labels = self.labels;
    let parent = self.parent;
    if (typeof label == 'string')
        label = parent.getLabelFromString(label);
    if (labels.includes(label)) {
        return 0;
    }
    else if (!parent.labels.includes(label)) {
        return 0;
    }
    else {
        labels.push(label);
        self.set('labels', labels);
        return 1;
    }
}
exports.addLabel = addLabel;
function removeLabel(self, label) {
    let labels = self.labels;
    let parent = self.parent;
    if (typeof label == 'string')
        label = parent.getLabelFromString(label);
    if (!labels.includes(label)) {
        return 0;
    }
    else if (!parent.labels.includes(label)) {
        return 0;
    }
    else {
        labels.splice(labels.indexOf(label), 1);
        self.set('labels', labels);
        return 1;
    }
}
exports.removeLabel = removeLabel;
