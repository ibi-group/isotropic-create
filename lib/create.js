export default (constructorFunction, prototypeObject) => Object.create(prototypeObject, {
    constructor: {
        configurable: true,
        enumerable: false,
        value: constructorFunction,
        writable: true
    }
});
