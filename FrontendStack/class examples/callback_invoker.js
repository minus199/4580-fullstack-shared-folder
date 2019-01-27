 function callbackInvoker(callbackFunction) {
  function invokeCallback() {
    console.log("Strating invoction");
    try {
      const callbackOutput = callbackFunction();
      console.log("ALRIGHT!!!", callbackOutput);
    } catch (e) {
      console.log("Error occured", e.message);
    }
  }

  console.log("returning invoker");
  return invokeCallback;
}

function sayHello() {
  return "HELLO!";
}
console.log("creating invoker");
const invoker = callbackInvoker(sayHello);
console.log("invoking invoker");
invoker();
invoker();
invoker();
invoker();
invoker();
console.log("invoker invoked");

/////////////////////////////////

// var test = null;
// function delayedExecution(res, rej) {
//     setTimeout(function() {
//       console.log("Before assigment", test);
//       test = "Some value";
//       console.log("After assigment", test);
//       res("OP Succ");
//     }, 2000);
//   }

// const currentPromise = new Promise(delayedExecution())
//   .then(status => {
//     console.log(status, test);
//   })
//   .catch(reason => console.log("Some err happened:", reason));

// console.log("Outside the promise", test);
// console.log(test);
