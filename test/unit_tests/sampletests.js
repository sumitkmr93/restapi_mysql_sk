var assert = require('assert');
// var app = require('../../Application/app');
var http = require('http');
 
describe('sampleUnitTests', function () {
    // before(function () {
    // });
  
    // after(function () {
    //     app.close();
    // });

    it('Should return 200', function (done) {
        http.get('http://localhost:3500', function (res) {
            assert.equal(200, res.statusCode, 'Result code should be 200.');
            done();
        });
    });
});