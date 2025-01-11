let x = document.getElementsByTagName('span')[0];
console.log(x);

let y = document.getElementsByTagName('span')[0];
console.dir(y);

// console.log(document.getElementsByTagName('span')[0])
// if i use console.dir then its shows the element as an object with its properties
// console.dir(document.getElementsByTagName('span')[0])

console.log(document.body.firstChild.nodeName)
console.log(document.body.firstElementChild.nodeName)