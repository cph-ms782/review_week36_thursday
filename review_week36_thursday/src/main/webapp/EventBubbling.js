/**
 * Event Bubbling and event arguments
 * 
 * a.
 */
document.getElementById("id1").onclick = clickID1;
document.getElementById("id2").onclick = clickID2;

function  clickID1(){

    document.getElementById("id1").innerHTML = "Hi from id1OfTheDiv";

}

function  clickID2(){

    document.getElementById("id2").innerHTML = "Hi from id2OfTheDiv";

}

/**
 * b.
 */
document.getElementById("outer").onclick = clickMe;

function clickMe(e){
    console.log(e.target);
    e.target.innerHTML = "Hi from "+e.target.id+"ofTheDiv";
    e.target.className ="";
}