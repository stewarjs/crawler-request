# crawler-request-js
Forked from https://gitlab.com/autokent/crawler-request.
Modified to pass metadata back from HTML, PDF, and Open Office documents.

**HTTP request module customized for crawlers.**

## Usage

### Simple Request
```js
const crawler = require('crawler-request-js');

crawler("https://stackoverflow.com/").then(function(response){
    // handle response
    console.log(response.text.lenght);
});
```

### PDF Parse
```js
const crawler = require('crawler-request-js');

crawler("http://careers.stackoverflow.com/stack_overflow_careers.pdf").then(function(response){
    // handle response
    console.log(response.text.lenght);
});
```

### HTML Metadata
```js
const crawler = require('crawler-request-js');

crawler("http://stackoverflow.com/").then(function(response){
    // handle response
    console.log(response.metadata.Title);
    console.log(response.metadata.Author);
    console.log(response.metadata.ModDate);
});
```

### PDF Metadata
```js
const crawler = require('crawler-request-js');

crawler("http://careers.stackoverflow.com/stack_overflow_careers.pdf").then(function(response){
    // handle response
    console.log(response.metadata['dc:title'];
    console.log(response.metadata['dc:creator']);
    console.log(response.metadata['dc:description']);
    console.log(response.metadata['xmp:modifydate']);
});
```

### Extend
```js
const crawler = require('crawler-request-js');

function response_text_size(response){
    response["size"] = response.text.length;
    return response;
}

crawler("https://stackoverflow.com/",response_text_size).then(function(response){
    // handle response
	console.log(response.size);
});
```

## License
[MIT licensed](https://gitlab.com/autokent/crawler-request/blob/master/LICENSE) and all it's dependencies are MIT or BSD licensed.
