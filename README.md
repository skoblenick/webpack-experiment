# Webpack Experiment

This repository is playing with using entry points other than a javascript file(s); for example html and css files

```
npm install
npm run build
```

## html-loader

### Version 2.1.0

1.  Modify the `package.json`. Change the version of `html-loader` to `2.1.0`. Default at time of pull.

1. Install and build:

    ```
    npm install && npm run build

    > my-webapp@0.0.0-development prebuild
    > rm -rf ./dist


    > my-webapp@0.0.0-development build
    > webpack --mode=production

    asset 47546174abc81baf1d6fc51698afdd8c.jpg 54.3 KiB [emitted] [immutable] [from: src/image.jpg]
    asset 0be54216207d9e4ba2f9fc7e7ae302c4.css 476 bytes [emitted] [immutable] [from: src/main.css]
    asset 84ddbfcdf81429b7dcf6bff294f46e97.html 332 bytes [emitted] [immutable] [from: src/index.html] (auxiliary name: main)
    asset main.js 20 bytes [emitted] [minimized] (name: main)
    orphan modules 160 bytes [orphan] 2 modules
    runtime modules 64 bytes 1 module
    cacheable modules 355 bytes
    ./src/index.html 81 bytes [built] [code generated]
    ./src/index.js 274 bytes [built] [code generated]
    webpack 5.24.3 compiled successfully in 534 ms
    ```

### Version 2.1.1

1.  Modify the `package.json`. Change the version of `html-loader` to `2.1.1`

1.  Run `npm install && npm run build`

    ```
    npm install && npm run build

    > my-webapp@0.0.0-development prebuild
    > rm -rf ./dist


    > my-webapp@0.0.0-development build
    > webpack --mode=production

    assets by status 1.05 KiB [cached] 1 asset
    ./src/index.html 39 bytes [built] [code generated] [1 error]
    ./src/index.js 274 bytes [built] [code generated]

    ERROR in ./src/index.html
    Module build failed (from ./node_modules/extract-loader/lib/extractLoader.js):
    /private/tmp/website/node_modules/resolve/lib/sync.js:104
        throw err;
        ^

    Error: Cannot find module 'file:///private/tmp/website/node_modules/html-loader/dist/runtime/getUrl.js' from '/private/tmp/website/src'
        at Function.resolveSync [as sync] (/private/tmp/website/node_modules/resolve/lib/sync.js:102:15)
        at /private/tmp/website/node_modules/extract-loader/lib/extractLoader.js:127:60
        at require (/private/tmp/website/node_modules/extract-loader/lib/extractLoader.js:122:86)
        at /private/tmp/website/src/index.html:4:48
        at Script.runInContext (vm.js:143:18)
        at Script.runInNewContext (vm.js:148:17)
        at /private/tmp/website/node_modules/extract-loader/lib/extractLoader.js:162:20
        at Generator.next (<anonymous>)
        at step (/private/tmp/website/node_modules/babel-runtime/helpers/asyncToGenerator.js:17:30)
        at /private/tmp/website/node_modules/babel-runtime/helpers/asyncToGenerator.js:35:14

    webpack 5.24.3 compiled with 1 error in 462 ms
    npm ERR! code 1
    npm ERR! path /private/tmp/website
    npm ERR! command failed
    npm ERR! command sh -c webpack --mode=production

    ```