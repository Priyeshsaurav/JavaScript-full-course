let a = document.getElementsByTagName('div')[0]
// a.innerHTML =a.innerHTML + '<h1>hello world!</h1>'; // this is old version to add inner html

let div = document.createElement('div')
div.innerHTML = '<h1>hello world!<h1>';
a.appendChild(div)
// a.append(div)
// a.prepend(div)
// a.before(div)
// a.after(div)
// a.replaceWith(div) // if i do that the main conatiner is replaced.