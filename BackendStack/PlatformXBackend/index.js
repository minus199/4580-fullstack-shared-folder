const userService = require("./user-service");
const statusCode = 500;

function sayHello() {
  console.log(
    `Hello, got the function - current status: ${statusCode} -- is loaded? ${
      module.loaded
    }`
  );
}

console.log("Loaded index.js", userService);

module.exports = {
  greet: sayHello,
  statusCode, //https://developer.mozilla.org/he/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
  makeUser: function() {
    const currentUser = userService.createOrGet(1, "asaf", "a@a.com");
    console.log(currentUser, userService.getNumberOfCachedUsers());
  }
};
