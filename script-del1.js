//s.2 Git & GitHub
//se https://github.com/BlenderWang/Oevningar

//s.5 Array
const books = ['JavaScript The Good Part', 'Headfirst JavaScript', 'A Manga Guide of Database', 'Object Oriented Programming', 'Building a Game with Unity and Blender', 'Eloquent JavaScript', 'front-end-developer-handbook'];

console.log(`Första: ${books[0]}`);
console.log(`Sista: ${books[books.length - 1]}`);
console.log(books.sort());
console.log(`Antal: ${books.length}`);

//s.7 Function
function hello() {
    console.log('Hello World');
}
function call() {
    for(var i = 0; i < 5; i++) {
        hello();
    }
}
call();

//s.8 Beräkna summa
function sumOfTwo(x, y) {
    return x + y;
}
console.log(`Summan av två tal: ${sumOfTwo(21, 4)}`);

function sumOfThree(x, y, z) {
    return x + y + z;
}
console.log(`Summa av tre tal: ${sumOfThree(147, 4, 9)}`);

//s.9 Beräkna medelvärde
function averageOfTwo(x, y) {
    return (x + y) / 2;
}
console.log(`Medelvärdet av denna två tal är ${averageOfTwo(46, 78)}`);

function averageOfThree(x, y, z) {
    return (x + y + z) / 3;
}
console.log(`Medelvärdet av denna tre tal är ${averageOfThree(2, 11, 29)}`);

//s.10
    // function f1(x,y) {
    //     return x * y;
    // }
    // function f2(a,b,c) {
    //     return f1(a,b) + c;
    // }
    // let result = f2(2,3,4);
    // console.log(result);
console.log('result = 10');

//s.11
// function f1(x, y) {
//     return x * y;
// }
// function f2(a, b) {
//     return a / b;
// }
// let result = f2(f1(3, 2), 2);
console.log('result = 3');

//s.12
// function ValueFunction(value) {
//     this.value = value;
//     this.getValue = function() {
//         return this.value;
//     }
//     this.setValue = function(a) {
//         this.value = a;
//     }
// }
// let valueTest = new ValueFunction(10);
// valueTest.setValue(20);
// console.log(valueTest.getValue());
console.log('Resultat: 20');

//s.13
// function ValueFunction(value) {
//     this.value = value;
//     this.getValue = function() {
//         return this.value;
//     }
//     this.addValue = function(a) {
//          this.value += a;
//     }
// }
// let valueTest = new ValueFunction(10);
// valueTest.addValue(20);
// console.log(valueTest.getValue());
console.log('Resultat: 30');

//s.14 Prompt()
const name = prompt('Skriv ett namn');

function greeting() {
    return `Hello ${name}`;
}

document.write(greeting());

//s.15 Antal timmer
const antal = parseInt(prompt('Ange ett antal minuter som är större än 60'));
//if(antal < 60) alert('Försök igen med nummer större än 60');

const timmar = Math.floor(antal / 60);
const minuter = antal % 60;

alert(`Antal timmar och minuter är: ${timmar} timmar och ${minuter} minuter.`);

//s.16 Mobilräkning
const antalMinuter = prompt('Antal minuter du ringer per månad: ');
const kostnadPerMin = prompt('Kostaden per minut:');

alert(`Du får betala i totalt ${antalMinuter * kostnadPerMin} kronor i månad.`);

//s.17 Moms
const prisExcl = parseInt(prompt('Ange varans pris excl. moms'));
const momsatsen = parseInt(prompt('Ange varans momsatsen i procent')) / 100;
const prisInkl = prisExcl + (prisExcl * momsatsen);
const momsen = prisExcl * momsatsen;

alert('Din vara kostar ' + prisInkl + ' kronor.' + '\n' + 'Momsen av varan är ' + momsen + ' kronor.');

//s.19 Swap algoritm
function swap(x, y) {
    let tmp = x;
    x = y;
    y = tmp;
    return [x, y];
}
const res = swap(97, 14);
console.log(`x: ${res[0]}, y: ${res[1]}`);

//s.20 Object
const dator = {
    tillverkare: 'HP EliteBook',
    processor: 'Intel i5',
    ram: '64MiB',
    os: 'Ubuntu'
};
console.log(dator);

//s.22 skapa Car objekt
const car = {
    name: 'Fiat',
    model: 500,
    weight: '850kg',
    color: 'white',
    start: function() {console.log('Here we go!');},
    drive: function() {console.log('On the way...');},
    brake: function() {console.log('Oopsy!');},
    stop: function() {console.log('Stop!!!');}
};
console.log(car.drive());

//s.23 Skapa Pokemon objekt
const pokemon = {
    name: 'Pikachu',
    type: 'Elackric',
    health: 70,
    attack() {
        console.log('Attack!');
    },
    dodge() {
        console.log('Dodge!');
    },
    evolve() {
        console.log('Evolve!');
    }
};
console.log(pokemon.dodge());

//s.24 Constructor
function Car(regNr, fabrikat, växellåda, miltal, tillv, bränsla) {
    this.regNr = regNr;
    this.fabrikat = fabrikat;
    this.växellåda = växellåda;
    this.miltal = miltal;
    this.tillv = tillv;
    this.bränsla = bränsla;
}
const polo = new Car('E01254', 'GM', 4, '12500km', 2016, 'gasoline');
const mini = new Car('A15698', 'Mercedez', 4, '23650km', 2015, 'gasoline');

console.log(polo);
console.log(mini);

//s.25 Dog constructor
function Dog(breed, size, age, color) {
    this.breed = breed;
    this.size = size;
    this.age = age;
    this.color = color;
    this.eat = function() {console.log('Nom Nom');};
    this.sleep = function() {console.log('Zzzzzzzz');};
    this.sit = function() {console.log("'I'm waiting...");};
    this.run = function() {console.log('Yeehaaa');};
}

const neapolitan = new Dog('Neapolitan Mastiff', 'Large', 5, 'Black');
const maltese = new Dog('Maltest', 'Small', 2, 'White');
const chow = new Dog('Chow Chow', 'Medium', 3, 'Brown');

console.log(`My family used to have a ${maltese.size} ${maltese.color} ${maltese.breed}.`);
console.log(`${chow.breed} is a ${chow.size} sized breed. My neighbor's ${chow.breed} is turning ${chow.age} years old this November.`);
console.log(neapolitan.eat());

//s.27 Capitalize
function captalize(str) {
    str = str.charAt(0).toUpperCase() + str.substring(1);
    return str;
}

console.log(captalize('hej och välkommen!'));

//s.29 max()
function maxArray(arr) {
    return Math.max(...arr);    //spread operator
}
console.log('Max:' + '' + maxArray([15, 29, 178]));

//s.30 max() & min()
function maxMin(arr) {
    const res = [Math.max(...arr), Math.min(...arr)];
    return `Max: ${res[0]}. Min: ${res[1]}`
}
console.log(maxMin([18, 325, 7]));

//s.31 Avståndsformeln
function distance(x1, x2, y1, y2) {
    const d = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1) , 2));
    return d;
}
console.log('Avståndet är: ' + distance(10, 16, 25, 37));

//s.33  Date YYMMDD
const now = new Date();

function getDate() {
    let year = now.getFullYear();
    year = year.toString().substr(-2);
    const month = now.getMonth() + 1;
    const day = now.getDate();

    console.log(`${year}${month}${day}`);
}
getDate();

//s.34 HH:MM:SS
function getTime() {
    time = now.toTimeString().toString().slice(0, 8);
    console.log(time);
}
getTime();

//s.35 Datum och arrayer ex Dag den DD månad YYYY
const dArr = ['Söndag', 'Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag'];
const mArr = ['Januari', 'Februari', 'Mars', 'April', 'Mai', 'Juni', 'Juli', 'Augusti', 'September', 'Oktober', 'November', 'December'];
const today = dArr[now.getDay()];
const currentMon = mArr[now.getMonth()];

console.log(`${today} den ${now.getDate()} ${currentMon} ${now.getFullYear()}`);

//s.36 Digital klocka
//se https://codepen.io/blenderWang/pen/JmaYVK