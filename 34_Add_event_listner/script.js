let x = function(e){   
    console.log(e.target)
    console.log(e.target.value)   // here you can see (e) means pointerEvent and this is event object
    alert('hello world1');
}

let y = function(e){
    alert('hello world2')
}

btn.addEventListener('click',x);

// btn.addEventListener('click',y); //Here we can dont use whole function() which is mention in row1 ,2,3 for add and remove event listener.

// let b = prompt("enter a number")
// if(b==2){
//     btn.removeEventListener('click',x)
// }