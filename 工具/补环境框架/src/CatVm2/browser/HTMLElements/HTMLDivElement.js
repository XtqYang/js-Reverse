var HTMLDivElement = function HTMLDivElement() { // 构造函数
    throw new TypeError("Illegal constructor");
};
catvm.safefunction(HTMLDivElement);

Object.defineProperties(HTMLDivElement.prototype, {
    [Symbol.toStringTag]: {
        value: "HTMLDivElement",
        configurable: true
    }
});
////////// 浏览器代码自动生成部分
HTMLDivElement.prototype.getElementsByTagName = function getElementsByTagName(tagName) {
  // 返回一个类数组对象来模拟NodeList
  return {
    length: 0,
    item: function(index) {
      return null;
    },
    // 其他属性
  };
};

catvm.safefunction(HTMLDivElement.prototype.getElementsByTagName);

////////


// 用户创建div
catvm.memory.htmlelements["div"] = function () {
    var div = new (function () {
    });
    //////////////////////////////////////////
    div.align = "";
    /////////////////////////
    div.__proto__ = HTMLDivElement.prototype;
    return div;
}

