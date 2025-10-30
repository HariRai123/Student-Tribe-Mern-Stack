let myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let success = true;
    if (success) {
      resolve("Operation successful!");
    } else {
      reject("Operation failed!");
    }
  }, 1000);
});

myPromise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });
console.log("One");
console.log("Two");
console.log("Three");
setTimeout(()=>console.log("Four"),0);
console.log("Five");
console.log("Six");
console.log("seven")
