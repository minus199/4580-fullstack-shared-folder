function UserNS(){


    function Post(id, content, owner){
        if (!(owner instanceof User)){
    
        }
        
    }
    
    function User(id, email, userName, posts){
        this.id = id;
        this.email = email;
        this.userName = userName;
        this.toEl = function(){};
        this.posts = [Post]
        // Object.defineProperty(this, "toHTML", {})
        // this.toHTML = toHTML; // NO!!!!!
    }

    return {User,Post}
}

const {User,Post} = UserNS();



new User()

/*
{
    User: function User(id, email, userName, posts){
        this.id = id;
        this.email = email;
        this.userName = userName;
        this.toEl = function(){};
        this.posts = [Post]
        // Object.defineProperty(this, "toHTML", {})
        // this.toHTML = toHTML; // NO!!!!!
    },
    Post: function Post(id, content, owner){
        if (!(owner instanceof User)){
    
        }
    }
}
*/

function AccountsNS(){
    function Post(id, content, owner){
        if (!(owner instanceof User)){
    
        }
    }
    
    function User(id, email, userName, posts){
        this.id = id;
        this.email = email;
        this.userName = userName;
        this.toEl = function(){};
        this.posts = [Post]
        // Object.defineProperty(this, "toHTML", {})
        // this.toHTML = toHTML; // NO!!!!!
    }
}


Object.defineProperty(User.prototype, "posts", {
    get: function(){
        fetch("posts?user_id = " + this.id).then(r => r.json()).then()
        new Posts(1, "asdasd", this)
    }
});

user.notifyNewComments()
function toHTML(){
    this.$el =  `<div>${this.id} - ${this.email}</div>`
}
User.prototype.toHTML = toHTML;

User.instancesStore = {};
User.createOrGet = function(rawUser){ 
	if(rawUser.username in User.instancesStore){
		return  User.instancesStore[rawUser.username];
	}  

	const currentInstance = new User(rawUser);
	User.instancesStore[currentInstance.user_name] = currentInstance;
	return currentInstance;
 }

User.prototype = Object.freeze(User.prototype)

const user = new User(1, "asaf_b", "123@a.com");








class User{
    constructor(id,userName, email){}

    get fullName(){

    }
    toHTML(){
        return `<div>${this.id} - ${this.email}</div>`
    }
}










function toHTML(toggleVisible){
    return this;
}
toHTML();

const boundToHTML = toHTML.bind(user, true);
toHTML.call(null,
toHTML.appl(null,