# crawler-request
> **Http requests module customized for crawlers.**

![logo](https://assets.gitlab-static.net/uploads/-/system/project/avatar/4802427/crawler-request.png)

[![version](https://img.shields.io/npm/v/crawler-request.svg)](https://www.npmjs.org/package/crawler-request)
[![downloads](https://img.shields.io/npm/dt/crawler-request.svg)](https://www.npmjs.org/package/crawler-request)
[![node](https://img.shields.io/node/v/crawler-request.svg)](https://nodejs.org/)
[![status](https://gitlab.com/autokent/crawler-request/badges/master/pipeline.svg)](https://gitlab.com/autokent/crawler-request/pipelines)

## Installation
`npm install crawler-request`

## Usage

### Simple Request
```js
const CR = require('crawler-request');

CR("https://stackoverflow.com/").then(function(response){
    //handle response
    console.log(response.text.lenght);
});

```

### Pdf Parse
```js
const CR = require('crawler-request');

CR("http://careers.stackoverflow.com/stack_overflow_careers.pdf").then(function(response){
    //handle response
    console.log(response.text.lenght);
});

```


### Extend
```js
const CR = require('crawler-request');

function response_text_size(response){
    response["size"] = response.text.length;
    return response;
}

CR("http://journals.tubitak.gov.tr/medical/issues/sag-09-39-3/sag-39-3-4-0902-21.pdf",response_text_size).then(function(response){
    //handle response
    assert.notEqual(response.size,null);
    assert.notEqual(response.size,0);
    done();
});

```


## Test
`mocha` or `npm test`

> check test folder and QUICKSTART.js for extra usage.