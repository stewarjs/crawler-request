# crawler-request

**HTTP request module customized for crawlers.**

## Usage

### Simple Request
```js
const crawler = require('crawler-request');

crawler("https://stackoverflow.com/").then(function(response){
    // handle response
    console.log(response.text.lenght);
});
```

### PDF Parse
```js
const crawler = require('crawler-request');

crawler("http://careers.stackoverflow.com/stack_overflow_careers.pdf").then(function(response){
    // handle response
    console.log(response.text.lenght);
});
```

### Extend
```js
const crawler = require('crawler-request');

function response_text_size(response){
    response["size"] = response.text.length;
    return response;
}

crawler("https://stackoverflow.com/",response_text_size).then(function(response){
    // handle response
	console.log(response.size);
});
```

## Test
`mocha` or `npm test`

Check [test folder](https://gitlab.com/autokent/crawler-request/tree/master/test) and [quickstart.js](https://gitlab.com/autokent/crawler-request/blob/master/QUICKSTART.js) for extra usages.

## License
[MIT licensed](https://gitlab.com/autokent/crawler-request/blob/master/LICENSE) and all it's dependencies are MIT or BSD licensed.
