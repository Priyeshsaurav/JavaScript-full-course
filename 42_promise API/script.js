//Promise.all:- waits for all promise to resolve
let p6 = Promise.resolve("One");
let p7 = Promise.resolve("Two");

Promise.all([p6, p7])
  .then(res => console.log(res))      // ['One', 'Two']
  .catch(err => console.log(err));


//--> promise.allSetlled:- waits for all promise to finish either resolve or reject and gives result of each
let p1 = Promise.resolve("success")
let p2 = Promise.reject("fail")

Promise.allSettled([p1,p2]).then(console.log)

//Promise.race:- result the first settled promise.either reject or resolve

let fast = new Promise(resolve =>setTimeout(()=> resolve("fast"),100));
let slow = new Promise(reject => setTimeout(()=> reject("slow"),500));

Promise.race([fast,slow]).then(console.log)

// promise.any:- return the result of first resolve promise and ignore rejection. if it all fails its throw an error

let p3= Promise.reject("error3");
let p4 =Promise.resolve("success");
let p5= Promise.reject("error5");

Promise.any([p3,p4,p5]).then(console.log)

