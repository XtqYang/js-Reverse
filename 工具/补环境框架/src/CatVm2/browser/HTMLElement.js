var HTMLElement = function HTMLElement() {
};
catvm.safefunction(HTMLElement);

// 浏览器
Object.defineProperties(HTMLElement.prototype, {
    [Symbol.toStringTag]: {
        value: "HTMLElement",
        configurable: true
    }
});
HTMLElement.prototype.__proto__ = Element.prototype
HTMLElement.prototype.accessKey = "";
