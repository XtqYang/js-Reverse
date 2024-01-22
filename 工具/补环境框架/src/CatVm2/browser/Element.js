var Element = function Element() {
};
catvm.safefunction(Element);

// 浏览器
Object.defineProperties(Element.prototype, {
    [Symbol.toStringTag]: {
        value: "Element",
        configurable: true
    }
});

Element.prototype.__proto__ = Node.prototype;
Element.prototype.ariaAtomic = "";
