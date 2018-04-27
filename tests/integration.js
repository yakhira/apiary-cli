'use strict';

const apiary = require('../src/apiary');

const host = 'http://localhost:8888';

describe('Test get-token', function() {
    const api = new apiary(host);
    it("returns tokens", async () => {
        expect(await api.getToken('username', 'password')).toEqual(
            Object(
                { 
                    tokens:  [ 
                        Object(
                            {
                                tokenDescription: 'Apiary client tool', 
                                tokenUrl: 'https://api.apiary.io/authorization/Apiary%20client%20tool' 
                            }
                        )
                    ]
                }
            )
        );
    });
});

describe('Test gen-token', function() {
    const api = new apiary(host);
    it("returns generated token", async () => {
        expect(await api.genToken('username', 'password')).toEqual(
            Object(
                { 
                    token: '1234567890',
                    tokenDescription: 'Apiary client tool',
                    tokenUrl: 'https://api.apiary.io/authorization/Apiary%20client%20tool'
                }
            )
        );
    });
});

describe('Test get-apis', function() {
    const api = new apiary(host);
    it("returns apis", async () => {
        expect(await api.getApiList('token')).toEqual(
            Object(
                {
                    apis: [
                        Object(
                            {
                                apiName: 'yakhira',
                                apiDocumentationUrl: 'https://yakhira.docs.apiary.io/',
                                apiSubdomain: 'yakhira',
                                apiIsPrivate: false,
                                apiIsPublic: true,
                                apiIsTeam: false,
                                apiIsPersonal: true
                            }
                        )
                    ]
                }
            )
        );
    });
});

describe('Test publish-bp', function() {
    const api = new apiary(host);
    it("returns status", async () => {
        const body = '{ "code": "FORMAT: X-1A\nHOST: http://polls.apiblueprint.org/\n\n# Example API\n\nIntroduction." }';
        expect(await api.publishBlueprint('test-path', 'token', body)).toEqual(
            Object(
                {
                    error: 1,
                    message: 'This resource requires authenticated API call.'
                }
            )
        );
    });
});