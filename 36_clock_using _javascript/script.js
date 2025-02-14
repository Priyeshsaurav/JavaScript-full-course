//  question:- Create a digital seconds clock using setInterval and date object in javascript
//  the date object can be used to get the date time, hours and seconds which which can we updated using setInterval.

let a = new Date()
let h = a.getHours()
let m = a.getMinutes()
let s = a.getSeconds()
let d = a.getDate()
console.log(h,m,s,d)

const time = (h,m,s,d)=>{
    console.log("getDate",(h,m,s,d))
}
setInterval(time,1000)