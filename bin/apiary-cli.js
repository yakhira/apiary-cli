#!/usr/bin/env node

var program = require('commander');
var fs = require('fs');
var apiary = require('../src/apiary');

program
    .description('Apiary client tool')
    .option('-s, --server [server]', 'Apiary server', 'https://api.apiary.io')
program
    .command('get-token <username> <password>')
    .description('Get users token')
    .action(async (username, password) => {
        var api = new apiary(program.server);
        console.log(await api.getToken(username, password));
    })
program
    .command('gen-token <username> <password>')
    .description('Generate users token')
    .action(async (username, password) => {
        var api = new apiary(program.server);
        console.log(await api.genToken(username, password));
    })
program
    .command('get-apis <token>')
    .description('Get api list')
    .action(async (token) => {
        var api = new apiary(program.server);
        console.log(await api.getApiList(token));
    });
program
    .command('publish-bp <path> <token> <payload>')
    .description('Publish blueprint')
    .action(async (path, token, payload) => {
        var api = new apiary(program.server);
        if(fs.existsSync(payload)){
            var body = fs.readFileSync(payload);
            console.log(await api.publishBlueprint(path, token, body));
        } else {
            console.log(`Payload ${payload} doesn't exists.`);
        }
    });

program.parse(process.argv);

if (program.args.length === 0) program.help();