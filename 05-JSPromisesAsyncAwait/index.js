//ES6 Promises
//https://alphacoder.xyz/nodejs-unhandled-promise-rejection-warning/
//medium.com/@lydiahallie/javascript-visualized-promises-async-await-a3f1aad8a943

// var  p = new Promise((resolve, reject) => {
//   try {
//     throw 'oh no.. there is an error'
//     console.log('here')
//     const data = 'Data from db!';
//     resolve(data);
//   } catch (e) {
//     console.log('Super error')
//     reject(new Error(e));
//   }
// });

// console.log(p);

// const promise1 = new Promise(function (resolve, reject) {
//   try {
//           throw new Error('Promise 1 has tanked.');

//   } catch (error) {
//     console.log("there was an error!!")
//     throw(error)
//   }

// });

// const promise2 = new Promise(function (resolve, reject) {
//   promise1.then();
// });

// // new Promise((res, rej) => rej("what!!"));

// (async function () {
//   //try {
//     await promise2;
// //   } catch (err) {
// //     console.log(err);
// //   }
// })();

// process.on('unhandledRejection', function (err) {
//    console.log(err);
//  });

// const slowAndSteady = new Promise((res, rej)  => {
//     setTimeout( () => {
//         console.log('Slow and steady wins the race.');
//         res("all good");
//     }, 3000);
// });

// console.log('awaiting...');

// slowAndSteady.then(function (promiseResponse) {
//   console.log("slowAndSteady response : ",promiseResponse);
//   console.log('The last shall be the first!');
// });

// (async function () {
//   await slowAndSteady.then((response)=>{
//       console.log("Response is : ", response)
//   });
//   console.log('The last shall be the first!');
// })();

// const slowAndSteadyReject = new Promise((resolve, reject) => {
//   //reject(new Error('slowAndSteadyReject rejected'));
//     throw new Error('Summ just happen right now :(');

// });

// (async function () {
//   await slowAndSteadyReject;
// })();
https: process.on('unhandledRejection', function (err) {
  console.log(err);
  // sendInTheCalvary(err);
});


const promise1 = new Promise( (resolve, reject) => {
  throw new Error('Promise 1 has tanked.');
});

const promise2 = new Promise( async (resolve, reject) => {
    await promise1.then().catch(() => { reject(new Error("Promise 1 failed.")); });
});

(async  () => {
  try {
    await promise2;
  } catch (err) {
    console.log(err);
  }
})();