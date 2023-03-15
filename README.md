# @heiwa4126/hello1 (npm-hello1)

CommonJS と ECMASCript のデュアルパッケージのテスト用に、
require と import とでは違う結果を返すモジュール。

## 使い方

```bash
npm i @heiwa4126/hello1
```

CommonJS の場合 - `hello` が出力される。

```javascript
const { hello1 } = require("@heiwa4126/hello1");
console.log(hello1());
```

ECMASCript または TypeScript の場合 - `hello (import)` が出力される。

```typescript
import { hello1 } from "@heiwa4126/hello1";
console.log(hello1());
```
