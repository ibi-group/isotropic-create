import _chai from 'isotropic-dev-dependencies/lib/chai.js';
import _create from '../lib/create.js';
import _test from 'node:test';

_test.describe('create', () => {
    _test.it('should create an object with the given constructor function and prototype object', () => {
        const ConstructorFunction = () => void null,
            prototypeObject = {
                a: 'a',
                b: 'b',
                c: 'c'
            },

            object = _create(ConstructorFunction, prototypeObject);

        _chai.expect(object).to.be.an('object');
        _chai.expect(object).to.have.property('a', 'a');
        _chai.expect(object).to.have.property('b', 'b');
        _chai.expect(object).to.have.property('c', 'c');
        _chai.expect(object).to.have.property('constructor', ConstructorFunction);
        _chai.expect(Reflect.getPrototypeOf(object)).to.equal(prototypeObject);
    });
});
