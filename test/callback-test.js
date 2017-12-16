const assert = require('assert');
const CR = require('../');

describe('must callbacks works', function() {
    this.timeout("60000");

    it('should single callback works', function(done) {

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

    });
});