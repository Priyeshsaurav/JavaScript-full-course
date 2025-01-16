document.write("hello")

const sum = (a,b)=>{
    console.log("yes i am running", (a+b))
    a+b
}
setTimeout(sum,2000,1,2)  //set time out means only one times will be executed 

// setInterval(function(){  //but In setInterval  syntx will be same but its execution will be repeated
//     alert("setinterval")
// },3000)

// const sum2 =(a,b)=>{
//     console.log("yes i am priyesh",(a+b))
//     a+b
// }
// setInterval(sum,3000,2,3)

// let a = setTimeout (function(){
//     alert("i am in set timeout")
// },5000)

// let b = prompt("do you want to run settimeout ?")
// if("n" == b){
//     clearTimeout(a)
// }
// // clearTimeout(a)
// console.log(a)