// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest

function reqListener() {
  console.log(this.responseText);
}

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "http://localhost:3000/users");
oReq.send();

/*
  A request made via XMLHttpRequest can fetch the data in one of two ways, asynchronously or synchronously. 
  The type of request is dictated by the optional async argument (the third argument) that is set on the XMLHttpRequest.open() method.
  If this argument is true or not specified, the XMLHttpRequest is processed asynchronously, 
  otherwise the process is handled synchronously. 
  

   The constructor function XMLHttpRequest isn't limited to only XML documents. It starts with "XML" because when it was created the main format that was originally used for Asynchronous Data Exchange were XML
  */

function updateProgress(oEvent) {
  if (oEvent.lengthComputable) {
    var percentComplete = (oEvent.loaded / oEvent.total) * 100;
    console.log(percentComplete);
  } else {
    console.log("Unable to compute progress");
    // Unable to compute progress information since the total size is unknown
  }
}

function transferComplete(evt) {
  this.responseText;
  console.log("The transfer is complete.", evt);
}

function transferFailed(evt) {
  console.log("An error occurred while transferring the file.", evt);
}

function transferCanceled(evt) {
  console.log("The transfer has been canceled by the user.", evt);
}

const oReq = new XMLHttpRequest();
oReq.addEventListener("onreadystatechange", function(e){
    if (this.readyState === 4){
        
    }
})
oReq.addEventListener("progress", updateProgress);
oReq.addEventListener("load", transferComplete);
oReq.addEventListener("error", transferFailed);
oReq.addEventListener("abort", transferCanceled);

oReq.open("GET", "http://localhost:3000/users", false);
oReq.send();

function fetchPolyfill(endpoint, httpMethod = "GET", onProgress = () => {}) {
  return new Promise(function(resolve, reject) {
    const oReq = new XMLHttpRequest();

    oReq.addEventListener("progress", onProgress);

    oReq.addEventListener("load", function(event) {
      resolve(["Complete", event, JSON.parse(oReq.response)]);
    });

    oReq.addEventListener("error", function(event) {
      reject(["Failed", event]);
    });

    oReq.addEventListener("abort", function(event) {
      reject(["Aborted", event]);
    });

    oReq.open(httpMethod, endpoint);
    oReq.send();
  });
}

fetchPolyfill("http://localhost:3000/users")
    .then(response => console.log(response))
    .catch(reason => console.error(reason));
