# isotropic-create

[![npm version](https://img.shields.io/npm/v/isotropic-character-fold.svg)](https://www.npmjs.com/package/isotropic-character-fold)
[![License](https://img.shields.io/npm/l/isotropic-character-fold.svg)](https://github.com/ibi-group/isotropic-character-fold/blob/main/LICENSE)
![](https://img.shields.io/badge/tests-passing-brightgreen.svg)
![](https://img.shields.io/badge/coverage-100%25-brightgreen.svg)

A utility that creates an object with a specific constructor function and prototype object.

## Why Use This?

- **Safer Object Creation**: Avoids issues that can occur when forgetting the `new` keyword
- **Familiar Semantics**: Retains the `constructor` property you'd expect from `new`
- **Explicit Prototypes**: Clearly specifies the prototype object for better code readability
- **Controlled Inheritance**: Provides a cleaner approach to prototypal inheritance

Really though, for most use cases it's better not to directly use `isotropic-create`.
Use [isotropic-make](https://www.npmjs.com/package/isotropic-make) instead!

## Installation

```bash
npm install isotropic-create
```

## Usage

```javascript
import _create from 'isotropic-create';

// Define a constructor function
const _Person = (name, age) => {
    const instance = _create(_Person, _Person.prototype);

    instance.name = name;
    instance.age = age;

    return instance;
};

// Define methods on the prototype
_Person.prototype.greet = function () {
    return `Hello, my name is ${this.name}`;
};

{
    // Create an instance without using 'new'
    const john = _Person('John', 30);

    console.log(john.greet()); // "Hello, my name is John"
    console.log(john.constructor === _Person); // true
    console.log(Object.getPrototypeOf(john) === _Person.prototype); // true
}
```

## How It Works

`isotropic-create` uses `Object.create()` to create a new object with the specified prototype and then adds the constructor property with the right settings. This approach:

1. Avoids the issues that can occur when forgetting the `new` keyword
2. Explicitly sets the prototype chain
3. Adds the constructor property (non-enumerable) pointing to the constructor function

It's important to note that `isotropic-create` creates the instance object but does not call the constructor function! A useful pattern is to use it within a constructor function and then return the instance.

## API

### create(constructorFunction, prototypeObject)

Returns a new object with `prototypeObject` as its prototype and a `constructor` property that points to `constructorFunction`.

#### Parameters

- `constructorFunction` (Function): The constructor function to assign to the object
- `prototypeObject` (Object): The prototype object to use

#### Returns

- (Object): A new object with the specified prototype and constructor

## Contributing

Please refer to [CONTRIBUTING.md](https://github.com/ibi-group/isotropic-create/blob/main/CONTRIBUTING.md) for contribution guidelines.

## Issues

If you encounter any issues, please file them at https://github.com/ibi-group/isotropic-create/issues
