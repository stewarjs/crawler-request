const assert = require('assert');
const CR = require('../');

describe('must crawl google', function() {
    this.timeout("1200000");
    it('should set error when url is invalid', function(done) {
        let url = "aaabbbccc";
        CR(url).then(function(res){
            assert.equal(res.url,url);
            assert.equal(res.type,"none");
            assert.equal(res.status,-1);
            assert.notEqual(res.error,null);
            done();
        });
    });

    it('should set error when url has invalid extension', function(done) {
        let url = "https://stackoverflow.com/logo.png";
        CR(url).then(function(res){
            assert.equal(res.url,url);
            assert.equal(res.type,"none");
            assert.equal(res.status,-1);
            assert.notEqual(res.error,null);
            assert.equal(res.error,"unsupported-extension");
            done();
        })
    });


    it('should return response when url has http protocol-1', function(done) {
        let url = "http://stackoverflow.com";
        CR(url).then(function(res){
            assert.equal(res.url,url);
            assert.equal(res.type,"html");
            assert.equal(res.status,200);
            assert.equal(res.error,null);
            assert.notEqual(res.text,null);
            assert.notEqual(res.text.length,0);
            done();
        })
    });

    it('should return response when url has http protocol-2', function(done) {
        let url = "http://stackoverflow.com/";
        CR(url).then(function(res){
            assert.equal(res.url,url);
            assert.equal(res.type,"html");
            assert.equal(res.status,200);
            assert.equal(res.error,null);
            assert.notEqual(res.text,null);
            assert.notEqual(res.text.length,0);
            done();
        })
    });

    it('should return response when url has https protocol-1', function(done) {
        let url = "https://stackoverflow.com";
        CR(url).then(function(res){
            assert.equal(res.url,url);
            assert.equal(res.type,"html");
            assert.equal(res.status,200);
            assert.equal(res.error,null);
            assert.notEqual(res.text,null);
            assert.notEqual(res.text.length,0);
            done();
        })
    });

    it('should return response when url has https protocol-2', function(done) {
        let url = "https://stackoverflow.com/";
        CR(url).then(function(res){
            assert.equal(res.url,url);
            assert.equal(res.type,"html");
            assert.equal(res.status,200);
            assert.equal(res.error,null);
            assert.notEqual(res.text,null);
            assert.notEqual(res.text.length,0);
            done();
        })
    });

});


