function myFunction(){
    let x=document.getElementById("myselect").value;
    document.getElementById("demo").innerHTML="you selected: "+ x;
}

function myChange(value){
    alert("the input value has changed.The new value is: "+value);
}

function focusFunction(){
    document.getElementById("myInput").style.backgroundColor="yellow";
}

function blurFunction(){
    document.getElementById("myInput").style.backgroundColor="red";
}