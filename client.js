var seneca = require("seneca")();

seneca
  .client({
    port: 10005
  })
  .act({
    role: "products",
    cmd: "list"
  }, {
    data: {d: "d"}
  },function (error, result) {
    if (error) {
      console.log(error);
    }
    console.log(result);
  });
