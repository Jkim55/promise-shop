var promise = new Promise(function (fulfill, reject){
  fulfill('I FIRED');
  reject(new Error('I DID NOT FIRE'));
})
.then(console.log, function (error){
  console.log(error.message)
});


// var promise = new Promise(function (fulfill, reject){
//   fulfill('I FIRED');
//   reject(new Error('I DID NOT FIRE'));
// })
//
// function onReject(error){
//   console.log(error.message)
// }
//
// promise.then(console.log, onReject);
