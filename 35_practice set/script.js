document.getElementById('google').addEventListener('click',function(){
    window.location="https://google.com";
    window.focus();
})
document.getElementById('facebook').addEventListener('click',function(){
    window.location="https://facebook.com";
    window.focus();
})


// const fetchContent = async (url) => {
//     const con = await fetch(url); // 'con' should use 'const' or 'let', not left undeclared.
//     let a = await con.json();
//     return a;
// };

// setInterval(async function () { // Declare the callback as async
//     let url = "https://jsonplaceholder.typicode.com/todos/1";
//     console.log(await fetchContent(url)); // Now 'await' works
// }, 3000);

setInterval(async function () { 
    document.querySelector("#bulb").classList.toggle("bulb")
}, 3000);
