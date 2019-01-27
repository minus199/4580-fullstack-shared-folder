/* TODO: Go over CSS selectors
    https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors 
 */
const BASE_URL = "http://localhost:3000";
function route(path) {
  return `${BASE_URL}/${path}`;
}

const myUser = {
  id: 94,
  first_name: "Taryn",
  last_name: "Houten",
  email: "thouten2l@vk.com",
  gender: "Female",
  last_ip_address: "167.44.153.84"
};
const stringified = JSON.stringify(myUser);
//JSON.parse(stringified);

fetch(route("users"))
  .then(res => res.json())
  .then(users =>
    localStorage.setItem(
      "users",
      JSON.stringify({ dateFetch: Date.now(), payload: users })
    )
  );
//
//TODO: POST request
fetch(route("users"), {
  method: "POST",
  headers: {
    "Content-Type": "application/json" // mime-type
    // "Content-Type": "application/x-www-form-urlencoded",
  },
  body: JSON.stringify(myUser)
}).then(res => console.log(res));

//Later on -- after response has finished
const stringfiedUsers = localStorage.getItem("users");
// typeof localStorage.getItem("users") // string
const parsedUsers = JSON.parse(localStorage.getItem("users"));
