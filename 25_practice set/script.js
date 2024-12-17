// document.getElementsByTagName("nav")[0].firstElementChild.style.color = "red";
// <!-- Problem 3:- create an element with 3 children.Now change the color of first and last element to green -->
document.getElementsByTagName("nav")[0].firstElementChild.style.color = "green";
document.getElementsByTagName("nav")[0].lastElementChild.style.color = "green";
// <!-- Problem 4:- write a javascript code to change background of all <li> tags to cyan -->
Array.from(document.getElementsByTagName("li")).forEach((element) => {
    element.style.background = "cyan";
})