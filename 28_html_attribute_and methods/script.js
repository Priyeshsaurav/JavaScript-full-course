let first = document.getElementById("first") // this is the best version for applying 
console.log(first)

// let a = first.getAttribute("class") // this is another way to write.....
// console.log(a)
console.log(first.hasAttribute("class")) // its getting true beacuse for this attribute value is available.
console.log(first.hasAttribute("style")) // its getting false beacuse this attribute value is not available.
console.log(first.removeAttribute("class"))
console.log(first.dataset)// this is dataset attribute this is for the when we add some key and value so it can help to render it
console.log(first.dataset.game)
console.log(first.dataset.player)
