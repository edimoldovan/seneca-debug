var seneca = require("seneca")();

seneca
  .use("plugin")
  .listen({
    port: 10005
  });
