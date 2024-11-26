# SuperDB Wasm

SuperDB Wasm is a JavaScript module that runs in a browser and exposes a JS version of the `super` command.

## Installation

This is an ESM module for the browser. To use it, import it from the local file system, a CDN, or an import map. Here’s an example of importing from jsdelivr.

```js
import { SuperDB } from "https://cdn.jsdelivr.net/npm/superdb-wasm/index.js";
```

## Usage Example

Call `.instantiate(url)` on the SuperDB class and pass in the URL of of the wasm file. The wasm file is named "superdb.wasm" at the root of the package.

```js
const superdb = await SuperDB.instantiate(
  "https://cdn.jsdelivr.net/npm/superdb-wasm/superdb.wasm"
);
```

This will fetch, decompress, and run the wasm code returning an instance of the SuperDB class.

Once you have an instance, call the `run({input, query})` method to start querying data.

```js
const result = await superdb.run({
  query: "yield this + 100",
  input: "1 2 3",
});

console.log(result);
// Prints:
// 100
// 200
// 300
```

## Contributing

The only purpose of this library is to wrap the superdb.wasm file. To test the code, simply open the index.html file served from a static file server and ensure that the code runs with no errors in the console. There are no automated tests and the code should remain simple enough not to require them.

```
npx serve .
```

Then open http://localhost:3000

Ensure the numbers "101 102 103" appear on the page. This means the wasm file was successfully used to add 100 to the numbers 1, 2, and 3.

## Publishing

There is a GitHub Action workflow that will publish the package to NPM when a tag is pushed to the repo that starts with "v". So to publish a new version, run these commands on your local computer using the version you wish to publish.

```
npm version 0.0.1
git push
```

That should do it. Check that the GitHub Actions workflow starts and completes successfully. Then you should see it on NPM.
