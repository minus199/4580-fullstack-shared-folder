// promise = Promise
/*
var promise = new Promise(function executor(fullfiled, rejected) {
  rejected("Some value REJECTED");
  fullfiled("Some value FULLFILED");
})
  .catch(function(reason) {
    return Promise.reject(["catch -- ", ["from catch", reason]]);
  })
  .then(resolvedVal => {
    return ["then -- ", resolvedVal + resolvedVal];
  });
*/

/*
function resolveAfter2Seconds() {
  return new Promise(resolve => {
    throw new Error("ASDASD");
    setTimeout(() => {
      resolve('***resolved');
    }, 2000);
  });
}

async function asyncCall() {
  try{
    var result = await resolveAfter2Seconds();
  } catch(e){
    throw new Error("Service unavilable");
  }
}

asyncCall()
  .then(resolvedValue => ["OK", resolvedValue])
  .catch(reason =>  ["ERR", reason])
  .then(x => console.log(x));;



*/

var test = null;
const currentPromise = new Promise(function(res, rej) {
  setTimeout(function() {
    console.log("Before assigment", test);
    test = "Some value";
    console.log("After assigment", test);
    res("OP Succ");
  }, 2000);
}).then(status => {
  console.log(status, test);
});

console.log("Outside the promise", test);
console.log(test);

var promise1 = Promise.resolve(3);
var promise2 = 42;
var promise3 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 500, "foo");
});

async function doAll() {
  const values = await Promise.all([promise1, promise2, promise3]);
  console.log("After all");
  return ["Done with all values", values];
}

const allP = await doAll();
console.log("Right after, contuinue with code");
console.log("allP", allP);

allP.then(values => {
  const [msg, vals] = values;
  console.log("msg", msg);
  console.log("vals", vals);
});
