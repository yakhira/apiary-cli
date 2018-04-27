## Installing

```bash
$ npm install -g apiary-cli-rky
```

## Usage

**$ apiary-cli-rky -h**

```bash
  Usage: apiary-cli-rky [options] [command]

  Apiary client tool

  Options:

    -s, --server [server]                Apiary server (default: https://api.apiary.io)
    -h, --help                           output usage information

  Commands:

    get-token <username> <password>      Get users token
    gen-token <username> <password>      Generate users token
    get-apis <token>                     Get api list
    publish-bp <path> <token> <payload>  Publish blueprint
```

#### Tests
```bash
$ npm run server &
$ npm run test
```