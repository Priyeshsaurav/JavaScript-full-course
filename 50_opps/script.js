
let animal ={
    eat: true,
    walk(){
        alert("animal walk")
    }
};
let rabbit = {
    jump: true,
    __proto__: animal
};
rabbit.walk();