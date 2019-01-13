# hasattr :mag_right:
Search key, in a deep json object or array

## Installation

#### Using npm 

```
npm install hasattr
```

#### Using yarn

```
yarn add hasattr
```

## Usage

```javascript
const hasAttr = require('hasattr');
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

You can contribute to this project by giving [suggestions](https://github.com/arshadkazmi42/hasattr/issues/new?assignees=&labels=&template=custom.md&title=), fixing [open issues](https://github.com/arshadkazmi42/hasattr/issues) or by implementing a new feature. Read our contibution guide [here](https://github.com/arshadkazmi42/hasattr/CONTIRBUTING.md)