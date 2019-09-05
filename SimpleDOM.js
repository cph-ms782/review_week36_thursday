var arr = document.getElementsByTagName('div');
console.log(arr);
arr[0].style.backgroundColor = "red";
arr[1].style.backgroundColor = "yellow";
arr[2].style.backgroundColor = "green";
document.getElementById("knap").onclick = clickMe;

function clickMe(){
    console.log("i clickMe");
    document.getElementById("id1").style.background = "blue";
    document.getElementById("id2").style.background = "blue";
    document.getElementById("id3").style.background = "blue";
}