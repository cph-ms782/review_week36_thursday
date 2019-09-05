/* 
 * Implement a simple calculator
 */
var reset = false;

document.querySelector("#buttons").onclick = clicked;
document.querySelector("#calculate").onclick = calculate;
function clicked(e) {
    var el = e.target.innerHTML;
    if (reset) {
        reset = false;
        document.querySelector("#display").innerHTML = "";
    }
    if (el !== "=") {
        var old = document.querySelector("#display").innerHTML;
        document.querySelector("#display").innerHTML = old + el;
    }
    console.log(e.target.value);
}

function calculate(e) {
    e.stopPropagation();
    var calcValue;
    var displ = document.querySelector("#display").innerHTML;
    if (displ.indexOf("+")>=0) {
        var arr = displ.split("+");
        calcValue = Number(arr[0]) + Number(arr[1]);
    } else if (displ.indexOf("-")>=0) {
        var arr = displ.split("-");
        calcValue = Number(arr[0]) - Number(arr[1]);
    } else if (displ.indexOf("*")>=0) {
        var arr = displ.split("*");
        calcValue = Number(arr[0]) * Number(arr[1]);
    } else if (displ.indexOf("/")>=0) {
        var arr = displ.split("/");
        calcValue = Number(arr[0]) / Number(arr[1]);
    }
    document.querySelector("#display").innerHTML = calcValue;
    reset = true;
}