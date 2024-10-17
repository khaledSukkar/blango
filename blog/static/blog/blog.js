const lazyAdd = function(a,b) {
  const doAdd = (resolve, reject) => {
    if(typeof a !== "number" || typeof b !== "number")
    {
      reject("a and b must be numbers");
    } else {
      const sum = a + b;
      resolve(sum)
    }

  }
  return new Promise(doAdd);
}

function resolvedCallback(data) {
  console.log("resolved data is:  " + data);
}

function rejectedCallback(message) {
  console.log('rejected with message: ' + message);
}


const p = lazyAdd(5,6);
p.then(resolvedCallback, rejectedCallback)