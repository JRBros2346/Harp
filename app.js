import init, * as harp from "./pkg/harp.js";
async function run() {
    await init();
    harp.greet();
}
run();