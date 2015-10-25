var seneca = require("seneca")();

module.exports = function product(options) {

  this.add("role:products,cmd:list", function create(msg, respond) {

    respond(null, {
      answer: "products"
    })

  });

};
