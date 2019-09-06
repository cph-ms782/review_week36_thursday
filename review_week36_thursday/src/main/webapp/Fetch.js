/* 
 * Dynamic UI manipulation using data obtained via fetch
 */

/**
 * To event listeners til de to knapper
 */
document.querySelector("#getUser").onclick = getUser;
document.querySelector("#getAllUsers").onclick = getAllUsers;

/**
 * Udskriver enkelt bruger.
 */
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
                document.querySelector("#users").innerHTML = data.comp;
                Object.keys(data).forEach(function (key) {
                    console.log(key + " : " + data[key]);
                    tags.push(key + " : " + data[key]);
                });
                document.querySelector("#users").innerHTML = tags.join("<br />");
            });
}

/**
 * Laver tabel over alle brugere
 */
function getAllUsers(e) {
    e.preventDefault();
    let url = "https://jsonplaceholder.typicode.com/users";
    console.log(url);
    fetch(url)
            .then(res => res.json()) //in flow1, just do it
            .then(data => {
                // Inside this callback, and only here, the response data is available
                console.log("data", data);
                var table = [];
                var name;
                var phone;
                table.push("<thead><tr><th>Name:</th><th>Phone:</th></th></tr></thead>");
                document.querySelector("#users").innerHTML = data.comp;
                data.forEach(function (k) {
                    Object.keys(k).forEach(function (key) {
                        if (key === 'name') {
                            name = k[key];
                            console.log("name: " + name);
                        }
                        if (key === 'phone') {
                            phone = k[key];
                            console.log("phone: " + phone);
                        }
                    });
                    table.push("<tbody><tr><td>" + name + "</td><td>" + phone 
                            + "</td></tr></tbody>");
                });
                document.querySelector("#users").innerHTML =
                        "<table id=\"carTable\" class=\"table\">"
                        + table.join("") + "</table>";
            });
}




