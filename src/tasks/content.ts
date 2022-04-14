class Content {
    public label: string;
    public content: string;
    constructor(label: string, content: string) {
        this.label = label;
        this.content = content;
    }

    public set(field: string, value: any) {
        this[field] = value;
    }
}

export { Content };