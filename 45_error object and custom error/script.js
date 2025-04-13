try{
    let age = prompt("enter your age")
    age = Number.parseIntI(age)
    if(age>180)
    throw new ReferenceError("this is probably not true")
}
catch(error){
    console.log(error.name)
    console.log(error.message)
    console.log(error.stack)
}