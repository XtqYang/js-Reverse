// var window1 = new window1;

var Window1 = function Window1() {
}
window1 = {};
window1.__proto__ = Window1.prototype

Object.defineProperties(window1.__proto__, {
    [Symbol.toStringTag]: {
        value: "Window1",
        configurable: true
    }
})

WindowProperties1 = function WindowProperties1() {
}
Object.defineProperties(WindowProperties1.prototype, {
    [Symbol.toStringTag]: {
        value: "WindowProperties1",
        configurable: true
    }
})
Window1.prototype.__proto__ = WindowProperties1.prototype


EventTarget1 = function EventTarget1() {
}

Object.defineProperties(EventTarget1.prototype, {
    [Symbol.toStringTag]: {
        value: "EventTarget1",
        configurable: true
    }
})

WindowProperties1.prototype.__proto__ = EventTarget1.prototype