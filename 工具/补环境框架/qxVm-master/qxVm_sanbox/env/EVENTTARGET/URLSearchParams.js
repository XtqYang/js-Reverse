URLSearchParams = function URLSearchParams(createObj_key) {
    if (createObj_key !== lwVm.memory.$createObj_key) {
    }
    lwVm.memory.private_data.set(this, {})
};
lwVm.safefunction(URLSearchParams);
;(function () {
    const $safe_get_attribute = [];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['append', 'delete', 'entries', 'forEach', 'get', 'getAll', 'has', 'keys', 'set', 'sort', 'toString', 'values'];
    URLSearchParams.prototype = {
        append() {
            debugger;
        },
        delete() {
            debugger;
        },
        entries() {
            debugger;
        },
        forEach() {
            debugger;
        },
        get() {
            debugger;
        },
        getAll() {
            debugger;
        },
        has() {
            debugger;
        },
        keys() {
            debugger;
        },
        set() {
            debugger;
        },
        sort() {
            debugger;
        },
        toString() {
            debugger;
        },
        values() {
            debugger;
        },

    };
    lwVm.set_iterator(URLSearchParams)
    lwVm.rename(URLSearchParams.prototype, "URLSearchParams");


    lwVm.safeDescriptor_addConstructor(URLSearchParams);
    lwVm.safe_Objattribute(URLSearchParams, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(URLSearchParams.prototype, EventTarget.prototype);

    Object.setPrototypeOf(URLSearchParams, EventTarget);


})();