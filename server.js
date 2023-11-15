const server = Bun.serve({
    port: 8000,
    fetch(request) {
        return new Response(Bun.file("index.htm"));
    }
});

console.log(`Listening on localhost:${server.port}`);