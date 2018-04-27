'use strict';

var request = require('request-promise');

class Apiary {
    constructor(url){
        this.baseURL = url
    }

    async getApiList(token){
        try {
            var response = await request.get(`${this.baseURL}/me/apis`).auth(null, null, true, token);
            return JSON.parse(response);
        }
        catch(err){
            console.log(err);
            return {error: err.error};
        }
    }

    async publishBlueprint(path, token, body) {
        try {
            var response = await request.post(
                `${this.baseURL}/blueprint/publish/${path}`, {
                    json: true, 
                    body: body
                }
            ).auth(null, null, true, token);
            return response;
        }
        catch(err){
            console.log(err);
            return {error: err.error};
        }
    }

    async getToken(username, password){
        try {
            var response = await request.get(
                `${this.baseURL}/authorization`, {
                    form: {
                        tokenDescription: 'Apiary client tool',
                    }
                }
            ).auth(username, password, true);
            return JSON.parse(response);
        }
        catch(err){
            console.log(err);
            return {error: err.error};
        }
    }

    async genToken(username, password){
        try {
            var response = await request.post(`${this.baseURL}/authorization`, {
                form: {
                    tokenDescription: 'Apiary client tool',
                    tokenRegenerate: 'true'
                }
            }).auth(username, password, true);
            return JSON.parse(response);
        }
        catch(err){
            console.log(err);
            return {error: err.error};
        }
    }
}

module.exports = Apiary;