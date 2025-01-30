//tipos de Variables ejemplos
//undefined, null,boolean,string,symbol,number, and object.

//tipo de llamados de variables

var myName = "rolo";         //var se puede usar en todo el codigo
let ourName = "asdf";        //let se puede usar solo una vez en un bloque de {} y no la puedes declarar en otro lado.
const pi = 3.16;            // const no se puede cambiar el valor cuando es definido
// Object.freeze)();        //se usa para ocngelar un objeto para que incluso con const nunca se cambie

//llamar variables ejemplos
console.log("----------------------------------------------");
console.log("LLAMAR VARIABLES EJEMPLOS");
var a;
console.log(a);
var a = 6;
console.log(a);
a += 10;
console.log(a);
a -= 2;
console.log(a);
a *= 2;
console.log(a);
a /= 3;
console.log(a);

//STRING EJEMPLOS
console.log("---------------------------------------------");
console.log("STRING EJEMPLOS");
var myStr = "I am a \"double quoated\"string inside \"double quotes";
console.log(myStr);

/***    
CODE OUTPUT
\' single quoate
\" double quote
\\ backslash
\n newline
\r carriage return
\t tab
\b backspace
\f form feed 
 */

var myStr = "Firstline\n\t\\Secondline\nThirdline";
console.log(myStr);

var ourStr = "I come first. ";
ourStr += "I come second. ";
console.log(ourStr);

var firstNameLength = 0;
var firstName = "adam";
firstNameLength = firstName.length;
console.log(firstNameLength);
//firstLetterofFirstName = firstName[0];
//console.log(firstLetterofFirstName);
var lastLetterOfFirstName = firstName[firstName.length - 1];
console.log(lastLetterOfFirstName);

//ejemplo de llamar funcion con strings
function worldBlank(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    result += "the " + myAdjective + myNoun + myVerb + " to the store " + myAdverb;

    return result;

}

console.log(worldBlank("dog ", "big ", "ran ", "quickly"));

var ourArray = ["john", 23];
console.log(ourArray);
var myArray = [["bulls", 23], ["white sox", 45]];
console.log(myArray);
console.log(myArray[1][0]);

//push une el siguiente dato al array que define
myArray = [["carlos", 23], ["cat", 3]];
myArray.push(["dog", 3]);
console.log(myArray);

ourArray = ["stim", "ffdsf", "cas"];
ourArray.push(["hapa", "sdf"]);
console.log(ourArray);

//pop quita el ultimo dato
myArray = [1, 2, 3];
var removedFromMyArray = myArray.pop();
console.log(myArray);
ourArray = [["d", "f", "g"], [2, 4, 5]];
var removedFromOurArray = ourArray.pop();
console.log(ourArray);
//shift quita el primer dato y unshift pone en primer lugar
myArray = [["asdf", "sdf", "asdf"], ["dog", "cat"]];
removedFromMyArray = myArray.shift();
console.log(myArray);


console.log("---------------------------------------------");
console.log("FUNCTIONS EJEMPLOS");
function abfun(a, b) {
    console.log(a - b);
}
abfun(10, 5);

var Global1 = 10;

//si pones var en la función la variable sera solo utilizada por la funcion
function fun1() {
    let Global2 = 5;
}

function fun2() {
    var result = "";

    if (typeof Global1 != "undefined") {
        result += "global1: " + Global1 + "\n";
    }
    if (typeof Global2 != "undefined") {
        result += "global2: " + Global2;
    }
    console.log(result);
}
fun1();
fun2();

//puedes usar una variable dentor de una function y regresarla si la cambias
var outerWear = "T-Shirt";
function myOutfits() {
    var outerWear = "sweater";
    return outerWear;
}
console.log(myOutfits());
console.log(outerWear);

function minusSeven(num) {
    return num - 7;
}
console.log(minusSeven(10));


var processed = 0;
function proccessArg(num) {
    return (num + 3) / 5;
}
processed = proccessArg(10);
console.log(processed);

//enviamos el numero que agregamos al array y quitamos el primero y devolvemos el array
function nextInline(arr, item) {
    arr.push(item);
    return arr.shift();
}
var testArr = [1, 2, 3, 4, 5];
console.log("before: " + JSON.stringify(testArr));
console.log(nextInline(testArr, 6));
console.log("after; " + JSON.stringify(testArr));

//bolean ejemplo
function trueorfalse(wasThatTrue) {
    if (wasThatTrue) {
        return "yes,that was true";
    }
    return "no, that was false";
}
console.log(trueorfalse(true));

function testStrict(val) {
    if (val === 7) {
        return "equal";
    }
    return "not equal";
}
console.log(testStrict(10));

//si comparas con == no cambia la definicion de la variable y con === si la cambia entonces no son iguales
function compareEquality(a, b) {
    if (a === b) {
        return "equal";
    }
    return "not equal";
}
console.log(compareEquality(10, "10"));

//!= lo mismo no defino el tipo de variable y el !== si define
function testStrictNot(value) {
    if (value !== 10) {
        return "not equal";
    }
    return "equal";
}
console.log(testStrictNot("10"));


function testSize(numbig) {
    if (numbig < 5) {
        return "Tiny";
    }
    else if (numbig < 10) {
        return "small";
    }
    else if (numbig < 15) {
        return "medium";
    }
    else if (numbig < 20) {
        return "large";
    }
    else {
        return "huge";
    }
}
console.log(testSize(7));

var names = ["Holeinone", "eagle", "birdie", "birdie", "par", "bogey", "double bogey", "Go home"];

function golfScore(par, strokes) {
    if (strokes == 1) {
        return names[0];
    }
    else if (strokes <= par - 2) {
        return names[1];
    }
    else if (strokes == par - 1) {
        return names[2];
    }
    else if (strokes == par) {
        return names[3];
    }
    else if (strokes == par + 1) {
        return names[4];
    }
    else if (strokes == par + 2) {
        return names[5];
    }
    else if (strokes >= par + 3) {
        return names[6];
    }
}
console.log(golfScore(5, 4));

//ejemplo de switch -tambien se puede comparar con algo dentro del case como "b" y devuelve algo.  
function caseInSwitch(val) {
    var answer = "";

    switch (val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
    }
    return answer;
}
console.log(caseInSwitch(4));

function sequentialSize(sec) {
    var answer = "";
    switch (sec) {
        case 1:
        case 2:
        case 3:
            answer = "low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "high";
            break;

    }
    return answer;
}
console.log(sequentialSize(8));

var count = 0;

function cc(card) {
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
    }

    var holdbet = "hold";
    if (count > 0) {
        holdbet = 'bet';
    }
    return count + " " + holdbet;
}

cc(2); cc('K'); cc(10); cc('K'); cc('A');
console.log(cc(4));

console.log("---------------------------------------------");
console.log("OBJETOS EJEMPLOS");

var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};
//puedes definir de dos maneras como jalar datos.
var hatValue = testObj.hat;
var shirtValue = testObj["shirt"];
console.log(shirtValue);
console.log(hatValue);

//ejemplo de un objeto adentro de una funcion haciendoo como si fuera un switch
function phoneticLookup(look) {
    var result = "";
    var lookup = {
        "alpha": "adams",
        "bravo": "boston",
        "charlie": "chicago",
        "delta": "denver",
        "echo": "easy",
        "foxtrot": "frank"
    };
    result = lookup[look];
    return result;
}

console.log(phoneticLookup("charlie"));

var testObj2 = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};

console.log();
function checkObj(checkProp) {
    if (testObj2.hasOwnProperty(checkProp)) {
        return testObj2[checkProp];
    } else {
        return "not Found";
    }
}
console.log(checkObj("hello"));



var myStorage = {

    "car": {

        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

var gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents);


var myPlants = [

    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];
var seconTree = myPlants[1].list[1];
console.log(seconTree);


console.log("---------------------------------------------");
console.log("WHILE and FOR - EJEMPLOS");

var arrayWhile = [];
var i = 0;
while (i < 5) {
    arrayWhile.push(i);
    i++;
}
console.log(arrayWhile);

var arrayFor = [];

for (var i = 0; i < 5; i++) {
    arrayFor.push(i);
}
console.log(arrayFor);

var arrayForOdd = [];
for (var p = 0; p < 10; p += 2) {
    arrayForOdd.push(p);
}
console.log(arrayForOdd);



function multiplyAll(arr) {
    var product = 1;

    for (var ar = 0; ar < arr.length; ar++) {
        for (var m1 = 0; m1 < arr[ar].length; m1++) {
            product *= arr[ar][m1];
        }
    }
    return product;
}
var product = multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
console.log(product);

//ejemplo de do while
var arrayDo = [];
var d = 10;

do {
    arrayDo.push(d);
    d++;
} while (d < 5);

console.log(d, arrayDo);

//funcion para encontrar datos en el array
var contacts1 = [
    {
        "name": "Akira",
        "lastName": "laine",
        "number": "32425245"
    },
    {
        "name": "harry",
        "lastName": "potter",
        "number": "32425245"
    }
];

function findContact(name, Prop) {
    for (var c = 0; c < contacts1.length; c++) {
        if (contacts1[c].name === name) {
            return contacts1[c][Prop] || "no such prop";
        }
    }
    return "No such contact";
}
var data = findContact("Akira", "number");
console.log(data);



console.log("---------------------------------------------");
console.log("EJEMPLOS VARIABLES Y FUNCTIONS - EJEMPLOS");
//numero random de 0.0 a 0.99
function randomFraction() {
    return Math.random();
}
console.log(randomFraction());

// numero random de 0 a 9
function randomWholeNum() {

    return Math.floor(Math.random() * 10);
}
console.log(randomWholeNum());

//random range en funcion
function ourRandomRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(ourRandomRange(5, 15));

//convertir un string a int
//si le agregas un 2 al lado convertira el binario en normal
function convertToInteger(str) {
    return parseInt(str, 2);
}
console.log(convertToInteger("10011"));

function checkEqual(a, b) {
    //return a === b ? true : false;

    return a === b;
}
console.log(checkEqual(1, 2));

function checkSign(sign) {
    return sign > 0 ? "positive" : sign < 0 ? "negative" : "zero";
}
console.log(checkSign(10));

//ejemplo de let y var
function checkScope() {
    "use strict";
    let block = "function scope"
    if (true) {
        let block = "block scope";
        console.log("Block scope block is: ", block);
    }
    console.log("Function scope block is: ", block);
    return block;
}
checkScope();

//ejemplo de const 
function printManyTimes(strCo) {
    "use strict";
    const sentence = strCo + " is cool";
    //sentence = strCo + " is amazing";
    for (let l = 0; l < strCo.length; l += 2) {
        console.log(sentence);
    }
}
printManyTimes("freeCodeCamp");

console.log("---------------------------------------------");
console.log("-------FUNCIONES CON ARROW => - EJEMPLOS-----");

const magic = () => new Date();
console.log(magic());

var myConcat = function (arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(myConcat([1, 2], [3, 4, 5]));

var myConcat2 = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat2([1, 2], [3, 4, 5]));


const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
    const squaredIntegers = arr.filter(numf => Number.isInteger(numf) && numf > 0).map(x => x * x);
    return squaredIntegers;
};
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);


const increment = (function () {
    return function increment(number, value = 1) {
        return number + value;
    };
})();
console.log(increment(5, 2));
console.log(increment(5));

const sum = (function () {
    return function sum(...args) {
        return args.reduce((a, b) => a + b, 0);
    };
})();
console.log(sum(1, 2, 3, 4));

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function () {
    arr2 = [...arr1]; //bloquea cualquier cambio siguiente de la funcion en el array con rest
    arr1[0] = 'potato';
})();
console.log(arr2);

//asignar valor de objeto en variables
var voxel = { x: 3.6, y: 7.4, z: 6.54 };
const { x: x1, y: y1, z: z1 } = voxel;

//asignar valor de funcion en variables
const AVG_TEMP = {
    today: 77.5,
    tomorrow: 79
};
function getTempOfTmrw(avgtemp) {
    "use strict";
    const { tomorrow: tempoftomorrow } = avgtemp;
    return tempoftomorrow;
}
console.log(getTempOfTmrw(AVG_TEMP));

//asignar valor de funcion en variables adentro de objetos
const LOCAL_FORE = {
    today: { min: 72, max: 83 },
    tomorrow: { min: 73.3, max: 84.6 }
};
function getMaxofTmrw(localfore) {
    "use strict";
    const { tomorrow: { max: maxOftomorrow } } = localfore;
    return maxOftomorrow;
}
console.log(getMaxofTmrw(LOCAL_FORE));

//funcion para cambiar valor de un array  con nest
const [m, n, , o] = [1, 2, 3, 4, 5, 6];
console.log(m, n, o);
let a1 = 8, b1 = 6;
(() => {
    "use strict";
    [a1, b1] = [b1, a1];
})();
console.log(a1);
console.log(b1);

//funcion para quitar elementos de un array con rest
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function removeFirstTwo(list) {
    const [, , ...arr] = list;
    return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);
console.log(source);


const stats = {
    max: 56.78,
    standard: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};
const half = (function () {
    return function half({ max, min }) {
        return (max + min) / 2.0;
    };
})();
console.log(stats);
console.log(half(stats));


//establecer multi linea y string inpolation con objeto.
const person = {
    name: "Zodiac Hasbro",
    age: 56
};
const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;
console.log(greeting);


const warnings = {
    success: ["max-length", "no-amd", "prefer-arrow-funcionts"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(list1) {
    const resultDisplayArray = [];

    for (let w = 0; w < list1.length; w++) {
        resultDisplayArray.push(`<li> class= "text-warning">${list1[w]}</li>`);
    }
    return resultDisplayArray;
}
const resultDisplayArray = makeList(warnings.failure);

console.log(resultDisplayArray);

//reducir una funcion de crear datos en funcion.
const createPerson = (name1, age1, gender1) => {
    return {
        name1: name1,
        age1: age1,
        gender1: gender1
    };
};
console.log(createPerson("Zodiac", 56, "male"));

const createPerson2 = (name2, age2, gender2) => ({ name2, age2, gender2 });
console.log(createPerson("zodiac", 56, "male"));

const bicycle = {
    gear: 2,
    setGear(newgear) {
        this.gear = newgear;
    }
};
bicycle.setGear(3);
console.log(bicycle.gear);

//crear objetos y constructores desde classes 
function makeClass() {
    class Vegetables {
        constructor(name) {
            this.name = name;
        }
    }
    return Vegetables;
}
const Vegetables = makeClass();
const carrot = new Vegetables('carrot');
console.log(carrot.name);


function makeThermo() {
    class Thermostat {
        constructor(temperature) {
            this._temperature = 5 / 9 * (temperature - 32);
        }
        get temperature() {
            return this._temperature;
        }
        set temperature(updateTemp) {
            this._temperature = updateTemp;
        }
    }
    return Thermostat;
}
const Thermostat = makeThermo();
const thermos = new Thermostat(76);
let temperature = thermos.temperature;
console.log(temperature);
//thermos.temperature = 26;
//temperature = thermos.temperature;
//console.log(temperature);


console.log("---------------------------------------------");
console.log("-------IMPORTING AND EXPORTING - EJEMPLOS-----");

import { capitalizeString } from "./string_function.js";
const cap2 = capitalizeString("hello");
console.log(cap2);

import { foo } from "./string_function2.js";
console.log(foo);

//import * as stringfunction from "./string_function2.js";
console.log("-------------------------------------");
var array1 = ["cat", "sum", "fun", "run"];
var array2 = ["bat", "cat", "sun", "hut", "gut", "sum"];
var str = '';
for (var i = 0; i < array1.length; i++) {
    if (array2.indexOf(array1[i]) != -1) {
        str += array1[i] + ' ';
    };
}
console.log(str)

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
































