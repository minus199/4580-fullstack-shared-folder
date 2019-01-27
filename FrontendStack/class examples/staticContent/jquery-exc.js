/*
function User(id, name, username){
	this.id = id;
	this.name = name;
	this.username= username;
}
User.prototype.login = function() { this.isLoggedIn = true;}
User.prototype.logout = function() { this.isLoggedIn = false;}

const u = new User(1, "asaf blum", "asaf_blum")
u.login()
u.logout()
u.isLoggedIn;

u2.login()
// undefined
u2
// User {id: 1, name: "asd", username: "zxczxc", isLoggedIn: true}
u2.logout()
// undefined
u2
// User {id: 1, name: "asd", username: "zxczxc", isLoggedIn: false}
*/

// DB structure -
const post = {
  id: 1,
  title: "This is what happened to me today",
  poster: "asaf",
  content: "I went to the beach and then went out to get some lunch"
};
const user = { id: 1, user_name: "asaf_blum", full_name: "Asaf Blum" };
const comment = { id: 1, content: "So cool!", post_id: 1 };
const db = { post, comment, user };
JSON.stringify(db);
//"{"post":{"id":1,"title":"This is what happened to me today","poster":"asaf","content":"I went to the beach and then went out to get some lunch"},"comment":{"id":1,"content":"So cool!","post_id":1},"user":{"id":1,"user_name":"asaf_blum","full_name":"Asaf Blum"}}"

// TODO: use https://www.generatedata.com/ to populate according to the above structure
// TODO: fetch the data from the database, using json server
// TODO: Create sortable( ) for each db table - a container for each
// TODO: Apply jQueryUI sortable
