'use strict';

var app = require('express')();
var parser = require('body-parser');

app.post('/authorization', (request, response) => {
    if (!request.headers.authorization)
    {
        response.status(401).json({ error: 'Unauthorized' });
        return;
    }

    response.status(201).json(
        { 
            token: '1234567890',
            tokenDescription: 'Apiary client tool',
            tokenUrl: 'https://api.apiary.io/authorization/Apiary%20client%20tool' 
        }
    )
});

app.get('/authorization', (request, response) => {
    if (!request.headers.authorization)
    {
        response.status(401).json({ error: 'Unauthorized' });
        return;
    }

    response.status(201).json(
        { 
            tokens: [
                { 
                    tokenDescription: 'Apiary client tool',
                    tokenUrl: 'https://api.apiary.io/authorization/Apiary%20client%20tool'
                }
            ]
        }
    )
});

app.get('/me/apis', (request, response) => {
    if (!request.headers.authorization) {
        response.status(401).json({ error: 'Token Invalid' });
        return;
    }

    response.status(200).json(
        {
            apis: [
                {
                    apiName: 'yakhira',
                    apiDocumentationUrl: 'https://yakhira.docs.apiary.io/',
                    apiSubdomain: 'yakhira',
                    apiIsPrivate: false,
                    apiIsPublic: true,
                    apiIsTeam: false,
                    apiIsPersonal: true,
                }
            ]
        }
    );
});

app.post('/blueprint/publish/:path', (request, response) => {
    if (!request.params.path === 'bad-domain') {
        response.status(500).json({ error: 'Missed domain name' });
        return;
    }

    if (!request.headers.authorization) {
        response.status(401).json({ error: 'Token Invalid' });
        return;
    }

    response.status(200).json(
        {
            error: 1,
            message: 'This resource requires authenticated API call.' 
        }
    );
});

app.listen(8888);