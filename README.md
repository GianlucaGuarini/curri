# curri

[![Build Status][travis-image]][travis-url]

[![NPM version][npm-version-image]][npm-url]
[![NPM downloads][npm-downloads-image]][npm-url]
[![MIT License][license-image]][license-url]



## Usage

```js
import curry from 'curri'

const add = (a, b) => a + b
const add3 = curry(add)(3)

console.log(add3(5)) // 8
```

[travis-image]:https://img.shields.io/travis/GianlucaGuarini/curri.svg?style=flat-square
[travis-url]:https://travis-ci.org/GianlucaGuarini/curri

[license-image]:http://img.shields.io/badge/license-MIT-000000.svg?style=flat-square
[license-url]:LICENSE

[npm-version-image]:http://img.shields.io/npm/v/curri.svg?style=flat-square
[npm-downloads-image]:http://img.shields.io/npm/dm/curri.svg?style=flat-square
[npm-url]:https://npmjs.org/package/curri

## API

