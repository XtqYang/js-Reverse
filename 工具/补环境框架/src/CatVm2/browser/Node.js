var Node = function Node() {
};
catvm.safefunction(Node);

// 浏览器
Object.defineProperties(Node.prototype, {
    [Symbol.toStringTag]: {
        value: "Node",
        configurable: true
    }
});
Node.prototype.ATTRIBUTE_NODE = 2;
Node.prototype.nodeName = catvm.memory.tagName;

Node.prototype.parentNode = {
    "removeChild": function removeChild(child) {
        catvm.memory.content_meta[0] = null
        return document['getElementsByTagName']("meta")[0]
    }
}

