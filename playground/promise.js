var asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof(a) === 'number' && typeof(b) === 'number'){
        resolve(a + b);
      } else {
        reject('Arguments must be numbers');
      }
    }, 3000);
  });
}

// var somePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     //resolve('It worked!'), 2000;
//     reject('Unable to fulfill the promise');
//   });
// });

// Promises receives two functions as parameters, so, .then method is waiting for two functions to trigger work
// somePromise.then((message) => {
//   console.log('Success:', message);
// }, (errorMessage) => {
//   console.log('Error: ', errorMessage);
// });

// asyncAdd(2,'3').then((res)=>{
//   console.log('Result: ', res);
//   return asyncAdd(res, 33);
// }, (errorMessage) => {
//   console.log(errorMessage);
// }).then((res)=>{
//   console.log('The result is (38): ', res);
// }, (errorMessage)=>{
//   console.log(errorMessage);
// })

asyncAdd(2,'3').then((res)=>{
  console.log('Result: ', res);
  return asyncAdd(res, 33);
}).then((res)=>{
  console.log('The result is (38): ', res);
}).catch((errorMessage) => {
  console.log(errorMessage);
});