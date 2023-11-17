# Harp
A more unified game engine
Its an attempt to unify my previous game engines. Harp is an evolution to Yazh, it includes Yazh, and also includes android and web.

# Web
This version runs on the web. A [Rust WebAssembly](https://rustwasm.github.io/) Game Engine. [Bun](https://bun.sh/) for the server. This could technically run without Bun.

# Guide
## Compiling
run the command ```wasm-pack build --target web``` to compile the library
## deploying
Add the following line to the game script
```html
<script type="module">
```
Add the following lines to the game script
```js
import init, * as harp from "./pkg/harp.js";
async function run() {
    await init();
    // code goes here...
}
run();
```

# Memories
This project is heavily inspired from my project [yazh.rs](https://github.com/JRBros2346/yazh.rs/). It is now archived, to give way to Harp
