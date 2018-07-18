# Stockpile.js

[![Stockpile.js on NPM](https://img.shields.io/npm/v/stockpile.js.svg?style=flat-square)](https://www.npmjs.com/package/stockpile.js) [![Stockpile.js Downloads on NPM](https://img.shields.io/npm/dm/stockpile.js.svg?style=flat-square)](https://www.npmjs.com/package/stockpile.js) [![Standard JavaScript Style](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com/)

A tiny localStorage wrapper providing namespacing and typed values.

## Usage

Stockpile was developed with a modern JavaScript workflow in mind. To use it, it's recommended you have a build system in place that can transpile ES6, and bundle modules. For a minimal boilerplate that does so, check out [outset](https://github.com/callmecavs/outset).

Follow these steps to get started:

* [Install](#install)
* [Call](#call)

Then dig into the [API](#api).

### Install

Using NPM, install Stockpile.js, and add it to your `package.json` dependencies.

```
$ npm install stockpile.js --save
```

### Call

Import Stockpile, then call it.

* Pass it your `namespace` string.

```es6
// import Stockpile
import stockpile from 'stockpile.js'

// create or retrieve your namespaced storage
const storage = stockpile('namespace')
```

## API

Note that the API mimics the return values of the [Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Storage).

However, whereas the Storage API supports only string values, **Stockpile supports getting and setting of all JavaScript's [primitive types](https://developer.mozilla.org/en-US/docs/Glossary/Primitive), as well as Arrays and Objects**.

### .get(name)

Get a key's value.

```es6
storage.get('name')
```

### .set(name, value)

Set a key's value.

```es6
storage.set('string', 'string')
storage.set('number', 1)
storage.set('boolean', true)
storage.set('array', [1, 2, 3])
storage.set('object', { key: 'value' })
```

### .remove(name)

Delete a key/value pair.

```es6
storage.remove('name')
```

### .clear()

Delete the namespace.

```es6
storage.clear()
```

### .exists(name)

Check if a key/value pair exists in the namespace.

```es6
storage.exists('name')
```

Returns true if it exists, false otherwise.

## License

MIT. © 2018 Michael Cavalea
