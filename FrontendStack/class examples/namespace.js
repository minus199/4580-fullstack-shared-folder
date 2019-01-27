var scoped = "globally scoped";
console.log(1, scoped);
function makeScope() {
  var scoped = "this is inside a local scope";
  return scoped;
}
console.log(2, makeScope());
console.log(3, scoped);

// WE CANNOT DECLARE TWO OF THE SAME NAME IN THE SAME SCOPE;
// function getCurrentTime(){
//     return `got current time from namespace One ${Date.now()}`
// }

// function getCurrentTime(){
//     return `got current time from namespace One ${Date.now()}`
// }

// THIS IS BAD -- not a real name space. WE can inoke as many times as we want to
function createNsOne() {
    
  function getCurrentTime() {
    return `got current time from namespace One ${Date.now()}`;
  }

  return getCurrentTime;
}
const nsOneA = createNsOne();
const nsOneB = createNsOne();
const nsOnec = createNsOne();
//END OF BAD EXAMPLE////

// Gurentee will only be invoked ONCE!! and there is no way to invoke again
const nsOne = (function() {
  function getCurrentTime() {
    return `got current time from namespace One ${Date.now()}`;
  }

  return getCurrentTime;
})();
// Gurentee will only be invoked ONCE!! and there is no way to invoke again
const nsTwo = (function() {
  function getCurrentTime() {
    return `got current time from namespace Two ${Date.now()}`;
  }

  return getCurrentTime;
})();

{
  let foo2 = "zxczxczxc";
  const foo = "asadasd";
  nsOne();
  nsTwo();
}
foo2 = "zxc";
console.log(foo, foo2);
