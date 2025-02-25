// synchronus: synchronous actions are actions which initate and finsih one-by-one

// let a = prompt("what is your name");
// let b = prompt("what is your age");
// let c = prompt("what is ypur favouite color");
// console.log(a + " is " + b + " years old and has " + c + " favouite color ");

//Asynchronous: Asynchronus actions are actions which initate now and finish later. for example: setTimeOut

// console.log("start");
// setTimeout(function () {
//   console.log("hey i am good");
// }, 3000);
// console.log("end");

//callback functon : callback function is a function that passed into another function as an argument which is then invkoed inner into outer function to complete an action

// function greet(name,callback1,callback2){
//     console.log("helo " + name)
//     callback1();
//     callback2();
// }
// //for callback function
// function google(){
//     console.log("cricket!");
// }
// function twitter(){
//     console.log("harrier!");
// }
// greet('Priyesh',google,twitter)

//Example: Simulating a Database Fetch with Callbacks

// function fetchUserData(userId,callback){
//     console.log("fetch data for user", userId)
//     // Simulating an asynchronous operation (like fetching from a database)
//     setTimeout(()=>{
//         const userData = {id: userId,name: "alice", age: 25}
//         callback(userData)
//     },2000);
// }
// function displayUser(user){
//     console.log(user)
// }
// fetchUserData(101,displayUser)
function loadScript(src,callback){
    let script = document.createElement('script')
    script.src = src
    script.onload = function() {
        console.log("loaded script with SRC: " + src)
        callback(null,src);
    }
    script.onerror = function(){
        console.log("Error loading script with src" + src)
        callback(new Error("src got some error"))
    }
    document.body.appendChild(script)
}
function hello(error,src){
    if(error){
        console.log(error)
        return
    }
    alert('hello world' + src)
}
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",hello)



