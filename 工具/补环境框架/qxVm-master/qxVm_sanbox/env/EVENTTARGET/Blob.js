Blob = function Blob(createObj_key) {
    if (createObj_key !== lwVm.memory.$createObj_key) {

    }
    lwVm.memory.private_data.set(this, {})
};
lwVm.safefunction(Blob);
;(function () {
    const $safe_get_attribute = ['size', 'type'];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['arrayBuffer', 'slice', 'stream', 'text'];
    Blob.prototype = {
        get size() {
            if (!NodeList.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
                let result = lwVm.abs(lwVm.memory.private_data.get(this).size, "");
                if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Node', 'size', arguments, result);
                return result;
        },
        get type() {
            if (!NodeList.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
            let result = lwVm.abs(lwVm.memory.private_data.get(this).type, "");
            if (lwVm.config.logOpen=== true) lwVm.logAdd('Get', 'Node', 'type', arguments, result);
            return result;
        },
        arrayBuffer() {
            debugger;
        }, slice() {
            debugger;
        }, stream() {
            debugger;
        }, text() {
            debugger;
        }

    };
    lwVm.rename(Blob.prototype, "Blob");


    lwVm.safeDescriptor_addConstructor(Blob);
    lwVm.safe_Objattribute(Blob, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(Blob.prototype, EventTarget.prototype);

    Object.setPrototypeOf(Blob, EventTarget);


})();