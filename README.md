# hasattr :mag_right:

[![Build Status](https://travis-ci.com/arshadkazmi42/hasattr.svg?branch=master)](https://travis-ci.com/arshadkazmi42/hasattr)
[![NPM Downloads](https://img.shields.io/npm/dt/ak-hasattr.svg)](https://www.npmjs.com/package/ak-hasattr)
[![Package Size](https://img.shields.io/bundlephobia/min/ak-hasattr.svg)](https://www.npmjs.com/package/ak-hasattr)
[![NPM Version](https://img.shields.io/npm/v/ak-hasattr.svg)](https://www.npmjs.com/package/ak-hasattr)
[![Contributors](https://img.shields.io/github/contributors/arshadkazmi42/hasattr.svg)](https://github.com/arshadkazmi42/hasattr/graphs/contributors)
[![Commit](https://img.shields.io/github/last-commit/arshadkazmi42/hasattr.svg)](https://github.com/arshadkazmi42/hasattr/commits/master)

Search key, in a deep json object or array

## Installation

#### Using npm 

```
npm install ak-hasattr
```

#### Using yarn

```
yarn add ak-hasattr
```

## Usage

```javascript
const hasAttr = require('ak-hasattr');
const JSON = {
  'name': 'Arshad Kazmi',
  'profile': {
    'github': {
      'username': 'arshadkazmi42',
      'repos': [
        {
          'repo_name': 'hasattr',
          'url': 'https://github.com/arshadkazmi42/hasattr',
        },
      ],
    },
    'twitter': {
      'username': 'arshadkazmi42',
    },
  },
};

console.log(hasAttr('name', JSON));
// true

console.log(hasAttr('repo_name', JSON));
// true

console.log(hasAttr('something', JSON));
// false

```

## Contributing

We are constantly working on improving `hasattr` and we need all the help we can get. 

You can contribute to this project by giving [suggestions](https://github.com/arshadkazmi42/hasattr/issues/new), fixing [open issues](https://github.com/arshadkazmi42/hasattr/issues) or by implementing a new feature. Read our contibution guide [here](https://github.com/arshadkazmi42/hasattr/CONTRIBUTING.md)
