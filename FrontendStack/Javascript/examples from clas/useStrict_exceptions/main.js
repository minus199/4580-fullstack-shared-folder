function InvalidOperationException(message, errorCode) {
  this.message = message;
  this.name = "InvalidOperationException";
  this.code = errorCode;
}
function PermissionsException(errorCode) {
  this.message = "Not allowed";
  this.name = "PermissionsException";
  this.code = errorCode;
}

function x(code) {
  if (code > 200) {
    throw new InvalidOperationException("something is messed up", 412);
  }

  throw new PermissionsException(505);
}

function x1(code) {
  x(code);
}

function x2(code) {
  x1(code);
}

function x3(code) {
  x2(code);
}

function safeInvokeX3(code) {
  try {
    x3(code);
  } catch (e) {
    if (e instanceof InvalidOperationException) {
      console.log("What are you trying to do...?", e.code, e.message);
      return;
    }

    if (e instanceof PermissionsException) {
      console.log("You are not allowed", e.code, e.message);
      return;
    }

    throw "Unsupported";
  }
}

safeInvokeX3(100);
safeInvokeX3(300);

//......
//......
//......
//......
//......

console.log("Completed succesfully");
