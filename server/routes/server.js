'use strict';

const hapi = require('hapi');
const server = hapi.Server({
    routes: {
        cors: true
    },
    port: 8080
});

async function start() {
    try {
        await server.start();
        console.log('Server running at:', server.info.uri)
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

module.exports.start = start;
module.exports.server = server;