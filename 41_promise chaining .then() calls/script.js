// let p1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("resolve after 2 seconds")
//         resolve(56)
//     },2000)
// })
// p1.then((value)=>{
//     console.log(value)
//     let p2 = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("promise 2")
//         },2000)
        
//     })
//     return p2
// }).then((value)=>{
//     console.log("we are done")
// })

function orderPizza() {
    return new Promise((resolve)=>{
        setTimeout(()=> resolve("order placed"),1000)
    })
}
function makePizza(status){
    return new Promise((resolve)=>{
        setTimeout(()=> resolve(status + "-> pizza made"),2000)
    })
}
function deliverPizza(status){
    return new Promise((resolve)=>{
        setTimeout(()=> resolve(status +"-> Pizza Delivered"),2000)
    })
}
//chaining the promises
orderPizza()
.then(makePizza)
.then(deliverPizza)
.then((finalStatus)=>{
    console.log(finalStatus)
})
.catch((error)=>{
    console.log("error",error)
})

// Attaching Multiple Handlers to a Promise:->

let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        alert('hey I am resolved')
        resolve(1)
    },2000)
})
p1.then(()=>{
    console.log('this prmoise is resolved')
})
p1.then(()=>{
    console.log('happy new year')
})