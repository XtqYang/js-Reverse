// 从浏览器中知道Document是全局的，new Document会返回一个对象
var Document = function Document() {
};
catvm.safefunction(Document);
// 浏览器
Object.defineProperties(Document.prototype, {
    [Symbol.toStringTag]: {
        value: "Document",
        configurable: true
    }
});
document = {};
document.__proto__ = Document.prototype;

/////////////////////////////////////

document.cookie = "HM4hUBT0dDOnenable=true; sessionid=3lnr4edu6z5dmfkaqdynx4t0nvzf66q7; Hm_lvt_c99546cf032aaa5a679230de9a95c7db=1705218134; Hm_lvt_9bcbda9cbf86757998a2339a0437208e=1705218134; Hm_lpvt_9bcbda9cbf86757998a2339a0437208e=1705239330; Hm_lpvt_c99546cf032aaa5a679230de9a95c7db=1705239330; m=155";

document.referrer = location.href || '';
document.getElementById = function getElementById(id) {
    debugger;
    // 用id匹配当前环境内存中已有的Element，没找到则返回null
    return null;
};
catvm.safefunction(document.getElementById);

document.getElementsByTagName = function getElementsByTagName(tagName) {
    catvm.memory.tagName = tagName;
    const HTMLMeta_meta = {
        accessKey: "",
        ariaAtomic: "",
        content: catvm.memory.content_meta[0],
      }
    HTMLMeta_meta.__proto__ = HTMLMetaElement.prototype

    const fakeMetaCollection = {
        length: 1,
        __proto__: HTMLCollection.prototype
    };
    fakeMetaCollection[0] = HTMLMeta_meta
    return fakeMetaCollection;

};

catvm.safefunction(document.getElementsByTagName);


document.addEventListener = function addEventListener(type, listener, options, useCapture) {
    debugger;
};
catvm.safefunction(document.addEventListener);


document.createElement = function createElement(tagName) {
    //转换为小写
    tagName = tagName.toLowerCase();
    if (catvm.memory.htmlelements[tagName] == undefined) {
        debugger;
    } else {
        var tagElement = catvm.memory.htmlelements[tagName]();
        return catvm.proxy(tagElement);
    }
};
catvm.safefunction(document.createElement);
/////////////////////////////////////
// 浏览器中document是全局的，因此我们也需要定义一个document 

document = catvm.proxy(document);

