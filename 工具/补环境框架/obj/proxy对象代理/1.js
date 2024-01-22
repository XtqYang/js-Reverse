// 将 global 对象赋值给 window 来模拟浏览器环境
window = global;

function vmProxy(o) {
    return new Proxy(o, {
        set(obj, prop, value) {
            console.log(obj, prop, value);
            return Reflect.set(obj, prop, value);
        },
        get(target, property, receiver) {
            console.log(target, property, receiver)
            return target[property]
        }
    });
}

// 修改 window 对象的 toStringTag 属性
Object.defineProperty(window, Symbol.toStringTag, {
    value: "window",
    configurable: true
});

// 创建并应用代理
window = vmProxy(window);
navigator = vmProxy(class navigator {
});
document = vmProxy(class document {
});
location = vmProxy(class location {
});

// 测试代理
window.aaa = 132432;
console.log(window.aaa)
