import chai from 'chai';
import create from '../js/create.js';
import mocha from 'mocha';

mocha.describe('create', () => {
    mocha.it('should create an object with the given constructor function and prototype object', () => {
        const ConstructorFunction = () => void null,
            prototypeObject = {
                a: 'a',
                b: 'b',
                c: 'c'
            },

            object = create(ConstructorFunction, prototypeObject);

        chai.expect(object).to.be.an('object');
        chai.expect(object).to.have.property('a', 'a');
        chai.expect(object).to.have.property('b', 'b');
        chai.expect(object).to.have.property('c', 'c');
        chai.expect(object).to.have.property('constructor', ConstructorFunction);
        chai.expect(Reflect.getPrototypeOf(object)).to.equal(prototypeObject);
    });
});
