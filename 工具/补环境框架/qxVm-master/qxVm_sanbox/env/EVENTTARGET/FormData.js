FormData = function FormData(createObj_key) {
    if (createObj_key !== lwVm.memory.$createObj_key) {

    }
    lwVm.memory.private_data.set(this, {})
};
lwVm.safefunction(FormData);
;(function () {
    const $safe_get_attribute = [];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ["append", "delete", "entries", "forEach", "get", "getAll", "has", "keys", "set", "values"];
    FormData.prototype = {
        append() {
            debugger;

        }, delete() {
            debugger;

        }, entries() {
            debugger;

        }, forEach() {
            debugger;

        }, get() {
            debugger;

        }, getAll() {
            debugger;

        }, has() {
            debugger;

        }, keys() {
            debugger;

        }, set() {
            debugger;

        }, values() {
            debugger;

        },


    };
    lwVm.rename(FormData.prototype, "FormData");


    lwVm.safeDescriptor_addConstructor(FormData);
    lwVm.safe_Objattribute(FormData, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(FormData.prototype, EventTarget.prototype);

    Object.setPrototypeOf(FormData, EventTarget);


})();