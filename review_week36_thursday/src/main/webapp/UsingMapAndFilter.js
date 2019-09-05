/**
 * Using map and filter to create dynamic table-rows
 */

/**
 * init
 */
var cars = [
    {id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000},
    {id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900},
    {id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000},
    {id: 4, year: 1996, make: 'Isabel', model: 'Grand Cherokee', price: 4799},
    {id: 5, year: 1978, make: 'Volvo', model: 'V15', price: 1789},
    {id: 6, year: 2004, make: 'Volvo', model: 'V75', price: 4567},
    {id: 7, year: 2005, make: 'Volvo', model: 'V70', price: 44799}
];

/**
 * Fyld tabellen med car objekter
 */
document.querySelector("#carTable").innerHTML = makeTable(cars);

/**
 * Eventlistener på knap
 */
document.querySelector("#prisFilter").onclick = filterCars;

/**
 * saml alle dele til een stor tag samling
 */
function makeTable(arr) {
    var allCarsArray = [];
    allCarsArray.push(makeTableHeader(arr[0]));
    var newCarsArray = arr.map(function hello(car) {
        var fCar = makeTableBody(car);
        return fCar;
    });
    allCarsArray.push.apply(allCarsArray, newCarsArray);
//    console.log(allCarsArray.join(""));
    return allCarsArray.join("");
}

/**
 * lav header del af html table
 */
function makeTableHeader(car) {
    var keys = [];
    Object.keys(car).forEach(function (key) {
        keys.push(key);
        headerFilled = true;
    });
    return "<thead><tr><th>" + keys.join("</th><th>") + "</th></tr></thead>";
}

/**
 * lav body del af html table
 */
function makeTableBody(car) {
    var values = [];
    Object.keys(car).forEach(function (key) {
        values.push(car[key]);
    });
    return "<tbody><tr><td>" + values.join("</td><td>") + "</td></td></tbody>";
}

/**
 * filtrér alt efter hvad der står i pris felt
 */
function filterCars(e) {
    e.preventDefault();
    var filterCars = cars.filter(function (car) {return car.price < document.querySelector("#priceValue").value;});
    console.log(filterCars);
    document.querySelector("#carTable").innerHTML = makeTable(filterCars);
}
