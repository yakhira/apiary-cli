'use strict';

var apiary = require('../src/apiary');

var host = 'http://localhost:8888';

describe('Test get-token', function() {
    var api = new apiary(host);
    it("returns status code 201", async () => {
        var result = await api.getToken('username', 'password');
    });
});

describe('Test gen-token', function() {
    var api = new apiary(host);
    it("returns status code 200", async () => {
        var result = await api.genToken('username', 'password');
    });
});

describe('Test get-apis', function() {
    var api = new apiary(host);
    it("returns status code 200", async () => {
        var result = await api.getApiList('token');
    });
});

describe('Test publish-bp', function() {
    var api = new apiary(host);
    it("returns status code 200", async () => {
        var body = '{ "code": "FORMAT: X-1A\nHOST: http://api.example.com/\n\n# Example API\n\nIntroduction." }';
        var result = await api.publishBlueprint('test-path', 'token', body);
    });
});