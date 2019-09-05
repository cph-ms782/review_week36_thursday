/**
 * 1.
 */
 var names = ["Lars", "Jan", "Peter", "Bo", "Frederik", "Ib"];
 var longNames = names.filter(name => name.length >=3);

function printNames(arr, str){
    console.log(str + ":");
    arr.forEach(element => {
        console.log(element);
    });
    console.log("\n");
}
printNames(names, "Printer alle navne");
printNames(longNames, "Printer lange navne");

/**
 * 2.
 */
var upper = names.map(function hello(name){
    var fname = name.toUpperCase();
    return fname;
});
printNames(upper, "Printer med store bogstaver:");

/**
 * 3.
 */
function HTMLication(arr){
    return "<ul><li>" + arr.join("</li><li>") + "</li><ul>";
}
console.log(HTMLication(names));
console.log("\n");

/**
 * 4.
 */
var cars = [
    { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
    { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
    { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
    { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
    { id: 5, year: 1978, make: 'Volvo', model: 'V15', price: 1789 },
    { id: 6, year: 2004, make: 'Volvo', model: 'V75', price: 4567 },
    { id: 7, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
  ];

let isVolvo = (car) => {
    return car.make === 'Volvo';
}

let isAfter1999 = (car) => {
    return car.year > 1999;
}

let isLowerPrice = (car) => {
    return car.price < 5000;
}

printNames(cars.filter(isVolvo),"Volvoer");
printNames(cars.filter(isVolvo).filter(isAfter1999).filter(isLowerPrice),"Volvoer efter 1999 og under 50000");

/**
 * 4a.
 * INSERT INTO cars (id,year,make,model,price) VALUES ( 1, 1997 , 'Ford','E350', 3000 );
 */
function SQLify(car){
    var keys = [];
    var values = [];
    Object.keys(car).forEach(function(key) {

        keys.push(key);
        values.push(car[key]);
      
      });
    return "INSERT INTO cars ("+ keys.join(",") +") VALUES (" + values.join(",") + ");";
}

function SQL(arr){
    var newAll = arr.map(function hello(name){
        var fname = SQLify(name);
        return fname;
    });
    return newAll;
}

printNames(SQL(cars), "SQL");

/**
 * 4b.
 */
printNames(SQL(cars.filter(isVolvo).filter(isLowerPrice)), "SQL for Volvo's under 5000");
