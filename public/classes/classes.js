class NodeTree {
    constructor(value, link) {
        this.value = 0;
        this.nextLink = null;
        this.NodeTree = (Value, link) => {
            this.value = Value;
            this.nextLink = link;
        };
        this.printNodeTree = () => {
            var _a;
            console.log([this.value, (_a = this.nextLink) === null || _a === void 0 ? void 0 : _a.value]);
        };
        this.value = value;
        this.nextLink = link;
    }
}
const node = new NodeTree(1, new NodeTree(2, null));
node.printNodeTree();
//# sourceMappingURL=classes.js.map