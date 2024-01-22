var HTMLCollection = function HTMLCollection() {
};
catvm.safefunction(HTMLCollection);


catvm.memory.MimeTypeArray.iterator = function values() {
    debugger;
    return {
        next: function () {
            if (this.index_ == undefined) {
                this.index_ = 0;
            }
            var tmp = this.self_[this.index_];
            this.index_ += 1;
            return {value: tmp, done: tmp == undefined};
        },
        self_: this
    }
};
catvm.safefunction(catvm.memory.MimeTypeArray.iterator);


// 浏览器
Object.defineProperties(HTMLCollection.prototype, {
    [Symbol.toStringTag]: {
        value: "HTMLCollection",
        configurable: true
    },
    [Symbol.iterator]: {
        value: catvm.memory.MimeTypeArray.iterator,
        configurable: true
    }
});
HTMLCollection.prototype.length = 1;
HTMLCollection.prototype.item = function item() {
    debugger;
    return null
};
catvm.safefunction(HTMLCollection.prototype.item);

HTMLCollection.prototype.namedItem = function namedItem() {
    debugger;
    return null
};
catvm.safefunction(HTMLCollection.prototype.namedItem);
