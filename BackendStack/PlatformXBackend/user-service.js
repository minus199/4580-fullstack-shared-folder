const db = require("./db.json");
console.log("Loaded users service");

function UserNotFoundException() {
  this.message = "User was not found";
  this.statusCode = 400;
}

function User(id, username, email) {
  this.id = id;
  this.username = username;
  this.email = email;
}

function getUserByID(id) {
  return getUserBy('id', id).pop();
}

function getUserBy(key, value) {
  return db.users.filter(user => user[key] === value);
}

module.exports = {
  getAllUsers: () => Object.freeze(db.users),
  getUserByID,
  getUserBy,
  createOrGet: function(id, name, email) {
    const existingUser = getUserByID(id);
    if (existingUser) {
      return [existingUser, false];
    }

    const currentUser = new User(id, name, email);
    db.users.push(currentUser);
    return [currentUser, true];
  },
  getNumberOfCachedUsers: () => db.users.length,
  UserNotFoundException
};
