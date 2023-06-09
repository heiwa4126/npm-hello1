# @heiwa4126/hello1 (npm-hello1)

A module that returns different results between require and import,
created for testing dual packages between CommonJS and ECMAScript.

CommonJS と ECMASCript のデュアルパッケージのテスト用に、
require と import とでは違う結果を返すモジュール。

## Usage 使い方

```bash
npm i @heiwa4126/hello1
```

In CommonJS - `hello` will be outputted.  
CommonJS の場合 - `hello` が出力される。

```javascript
const { hello1 } = require("@heiwa4126/hello1");
console.log(hello1());
```

In ECMAScript or TypeScript - `hello (import)` will be outputted.  
ECMASCript または TypeScript の場合 - `hello (import)` が出力される。

```typescript
import { hello1 } from "@heiwa4126/hello1";
console.log(hello1());
```

Also, `npx @heiwa4126/hello1` outputs `hello`.  
他 `npx @heiwa4126/hello1` で `hello` が出力される。

Also, `npm -i @heiwa4126/hello1` installs `heiwa4126-hello1`, and running it outputs `hello`.  
また、`npm -i @heiwa4126/hello1` で `heiwa4126-hello1` がインストールされ、実行すると `hello` が出力される。
