import init, {greet} from "./pkg/harp.js";
async function run() {
    await init();
    greet();
}
run();