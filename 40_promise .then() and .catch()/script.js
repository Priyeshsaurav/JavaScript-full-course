
let p1 = new Promise((resolve,reject)=>{
    console.log("promise is pending")
    setTimeout(()=>{
        resolve(true)
    },5000)
})
let p2 = new Promise((resolve,reject)=>{
    console.log("promise is pending")
    setTimeout(()=>{
        reject(new Error("i am an error"))
    },5000)
})
p1.then((value)=>{
    console.log(value)
})
p2.then((value)=>{
    console.log(value)
},(error)=>{
    console.log(error)
})