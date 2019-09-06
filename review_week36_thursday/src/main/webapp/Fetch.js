/* 
 * Dynamic UI manipulation using data obtained via fetch
 */



document.querySelector("#getUser").onclick = getUser;
document.querySelector("#getAllUsers").onclick = getAllUsers;
console.log("Logger");
function getUser(e) {
    e.preventDefault();
    var ID = document.querySelector("#userID").value;
    let url = "https://jsonplaceholder.typicode.com/users/" + ID;
    console.log(url);
    fetch(url)
            .then(res => res.json()) //in flow1, just do it
            .then(data => {
                // Inside this callback, and only here, the response data is available
//                console.log("data", data);
                var tags = [];
                document.querySelector("#users").innerHTML = data.comp
                Object.keys(data).forEach(function (key) {
                    if(typeof key === Object)
                    console.log(key + " : " + data[key]);
                    tags.push(key + " : " + data[key]);
                });
                document.querySelector("#users").innerHTML = tags.join("<br />");
            });
}

function getAllUsers(e) {
    e.preventDefault();
    let url = "https://jsonplaceholder.typicode.com/users";
    console.log(url);
    fetch(url)
            .then(res => res.json()) //in flow1, just do it
            .then(data => {
                // Inside this callback, and only here, the response data is available
                console.log("data", data);
                /* data now contains the response, converted to JavaScript
                 Observe the output from the log-output above
                 Now, just build your DOM changes using the data*/
            })
}



