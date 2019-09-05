/**
 * Event Bubbling and event arguments
 * 
 * a.
 */
document.getElementById("id1").onclick = clickID1;
document.getElementById("id2").onclick = clickID2;

function  clickID1() {

//    document.getElementById("id1").innerHTML = "Hi from id1OfTheDiv";
    document.querySelector("#pTag").innerHTML = "Hi from id1OfTheDiv";

}

function  clickID2() {

//    document.getElementById("id2").innerHTML = "Hi from id2OfTheDiv";
    document.getElementById("pTag").innerHTML = "Hi from id2OfTheDiv";

}

/**
 * b.
 */
document.getElementById("outer").onclick = clickMe;

function clickMe(e) {
    //this id value - "this" er det element hvor eventlisteneren er blevet aktiveret
    console.log(this.id);

    //target id value - "target" er det element man trykker på 
    console.log(e.target.id);

    /**
     * c.
     */
//    e.target.innerHTML = "Hi from " + e.target.id + "ofTheDiv";
//    this.innerHTML = "Hi from " + e.target.id + "ofTheDiv";
    document.querySelector("#pTag").innerHTML = e.target.id;
}