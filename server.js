const server = Bun.serve({
    port: 8080,
    fetch(req) {
        const url = new URL(req.url);
        if(url.pathname==="/") return new Response(Bun.file("index.htm"));
        if(url.pathname==="/app.js") return new Response(Bun.file("app.js"));
        if(url.pathname==="/pkg/harp.js") return new Response(Bun.file("pkg/harp.js"));
        if(url.pathname==="/pkg/harp_bg.wasm") return new Response(Bun.file("pkg/harp_bg.wasm"));
        return new Response("Not Found!", { status: 404 });
    }
});

console.log(`Listening on localhost:${server.port}`);

process.on("SIGINT", () => {
    console.log("Server Shutdown...");
    process.exit();
}); 