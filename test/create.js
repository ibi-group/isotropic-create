import {
    describe,
    it
} from 'mocha';

import create from '../js/create.js';

import {
    expect
} from 'chai';

describe('create', () => {
    it('should create an object with the given constructor function and prototype object', () => {
        const ConstructorFunction = () => void null,
            prototypeObject = {
                a: 'a',
                b: 'b',
                c: 'c'
            },

            object = create(ConstructorFunction, prototypeObject);

        expect(object).to.be.an('object');
        expect(object).to.have.property('a', 'a');
        expect(object).to.have.property('b', 'b');
        expect(object).to.have.property('c', 'c');
        expect(object).to.have.property('constructor', ConstructorFunction);
        expect(Reflect.getPrototypeOf(object)).to.equal(prototypeObject);
    });
});
