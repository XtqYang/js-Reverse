var HTMLDocument = function HTMLDocument() {
    throw new TypeError("Illegal constructor");
};
catvm.safefunction(HTMLDocument);

Object.defineProperties(HTMLDocument.prototype, {
    [Symbol.toStringTag]: {
        value: "HTMLDocument",
        configurable: true
    }
});

///////////////////////////////

HTMLDocument.URL = "http://www";

///////////////////////////////

