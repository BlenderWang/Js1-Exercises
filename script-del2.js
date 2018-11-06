//s.3
// let x = '5';
// if(x == 5)
// console.log(x +2);
// console.log('x + 2 = 52');

// //s.4
// // let x = 5;
// // if(x === 5)
// // console.log(x +2);
// console.log('x + 2 = 7');

// //s.5
// const daglig = parseInt(prompt('Hur många koppar kaffe köper du per dag?'));
// const antalPerDag = daglig * 12;

// if(antalPerDag * 30 >= 1000)
//     alert(`Nu får du 10% rabatt och antal är ${antalPerDag * 30 * 0.1} kronor.`);
// else
//     alert(`För att få rabatt måste man köpa ${Math.round((1000 - antalPerDag * 30) / 12)} fler koppar.`);

// //s.6
// const kort = prompt('Hur mycket kostar ett årskort?');
// const biljett = prompt('Hur mycket kostar en biljett?');
// const antal = prompt('Hur många gånger tycket du att simma under ett år?');

// if(antal * biljett > kort) alert('Du får köpa ett årskort!');
// else alert('Det räcker med en biljett!');

// //s.7
// const poäng = parseInt(prompt('Hur många poäng har du fått?'));

// if(poäng >= 50 * 0.7) document.write('Du får VG för betyget!');
// else if(poäng >= 50 * 0.5) document.write('Du får G för betyget!');
// else document.write('Tyvärr får du IG för betyget');

// //s.9
// let result = 0;
// for (let i = 0; i < 5; i++) {
// result += i;
// }
// console.log(result);
// console.log('result = 10');

// //s.10
// let counter = 0;
// let result = 0;
// while(counter < 5) {
// for(let i = 0; i < 5; i++)
// result++;   //result loop returns 5
// counter++;  //counter loops over 5 times each time adds 5, returns 25
// }
// console.log(result);
// console.log('result = 25');

//s.11
// let result = 0;
// let counter = 0;
// while(counter < 10) {
// if(counter < 5)
// result++;   //when counter = 4 result = 4
// else
// result += 2;    //since counter = 5 result += 2
// counter++;
// }
// console.log(result);
// console.log('result = 15');

//s.12
// let res = '';
// for(let i = 1; i < 30; i++) {
//     if(i % 2)
//     (i < 29) ? res += i + ';' : res += i;
// }
// console.log(res);

// let result = '';
// for(let i = 1; i < 30; i+=2) {
//     (i < 29) ? result += i + ' ; ' : result += i;
// }
// console.log(result);

// //s.13
// let i = 1;
// while(i <= 100) {
//     if(i % 7 === 0) console.log(i);
//     i++;
// }

// //s.14
// const activities = ['jogging', 'JavaScript', 'Övningar', 'Lektion', 'HTML', 'CSS', 'Målning'];
// const today = new Date().getDay(); //[0,1,2,3,4,5,6]
// const days = ['söndag', 'måndag', 'tisdag', 'onsdag', 'torsdag', 'fredag', 'lördag'];

// switch(today) {
//     case 0: console.log(`Det är ${days[today]} idag och du ska göra ${activities[0]} idag!`);
//     break;
//     case 1: console.log(`Det är ${days[today]} idag och du ska göra ${activities[1]} idag!`);
//     break;
//     case 2: console.log(`Det är ${days[today]} idag och du ska göra ${activities[2]} idag!`);
//     break;
//     case 3: console.log(`Det är ${days[today]} idag och du ska göra ${activities[3]} idag!`);
//     break;
//     case 4: console.log(`Det är ${days[today]} idag och du ska göra ${activities[4]} idag!`);
//     break;
//     case 5: console.log(`Det är ${days[today]} idag och du ska göra ${activities[5]} idag!`);
//     break;
//     case 6: console.log(`Det är ${days[today]} idag och du ska göra ${activities[6]} idag!`);
//     break;
//     default:
//     console.log('alert alert!');
// }

// //s.15
// const num = parseInt(prompt('Ange ett nummer mellan 1 och 10'));
// let table = '';

// for (let row = 1; row <= num; row++) {
//     for (let col = 1; col <= num; col++) {
//         table += row * col + '\t';
//     }
//     table += '\n'
// }

// console.log(table);

// //s.16
// for(let x = 1; x <= 10; x++) {
//     console.log(x + '\t' + Math.pow(x, 2) + '\t' + Math.pow(x, 3));
// }

// //s.17
// for(let x = 1; x <= 10; x++) {
//     console.log(x + '\t' + (x / 2).toFixed(2) + '\t' + (x / 3).toFixed(2));
// }

// //s.18
// const favFoods = ['Ärtsoppa', 'Röd Curry', 'Spaghetti Bolognese', 'Pizza Hawaii', 'BBQ', 'Dumplings', 'Tempura'];
// const meal = Math.floor(Math.random() * favFoods.length);
// const day = Math.floor(Math.random() * 6) + 1;

// if(day == 5) {
//     document.write('Du ska äta ute idag!');
// }else{
//     document.write(`Dagens maträtt är ${favFoods[meal]}.`);
// }

// //s.19
// let lön = 500;
// let månad = 1;

// for(månad = 1; lön <= 1000000; månad++)
//     lön *= 1.1;
// console.log(`Man måste jobba ${månad} månader för att tjäna en miljon.`);

// while(lön <= 1000000) {
//     månad++;
//     lön = (lön * 1.1).toFixed(2);
//     console.log(`${månad} månader tjänar man ${lön} kronor.`);
// }   //shows salary of every month

// //s.20
// const arr = [];

// while(true) {
//     let num = parseInt(prompt('Ange ett nummer'));

//     // if(num === '' || num === ' ') break;
//     if(isNaN(num) === true) break;

//     arr.push(num);
// }

// const min = Math.min.apply(null, arr);
// const max = Math.max.apply(null, arr);
// console.log('Min: ' + min + '\n' + 'Max: ' + max);

// //s.21
// const arr = [];

// function average() {
//     while(true) {
//         let num = parseInt(prompt('Ange ett nummer'));
//         if(isNaN(num) === true) break;

//         arr.push(num);
//     }

//     let sum = '';
//     for(let i = 0; i < arr.length; i++) {
//         // return arr[i];
//         sum = parseInt(sum + arr[i]);
//     }
//     return sum / arr.length;
// }
// console.log(average());

// //s.22
// let sheep = 1;
// for(let monthes = 1; monthes <= 12; monthes++)
//     sheep *= 4;
// console.log(sheep);

// //s.23
// function arraySum(arr) {
//     if(arr === 0) return 0;
//     else return arr + arraySum(--arr);
// }
// console.log(arraySum(4));

// //s.24
// function arraySum2D(arr2d) {
//     const result = arr2d.reduce( (accumulator, currentValue) => accumulator.concat(currentValue), [])   //to flatten the 2d array
//         .reduce( (accumulator, currentValue) => accumulator + currentValue, 0); //to sum up all values

//     return result;
// }

// console.log(arraySum2D([[1,2,3],[4,5,6]]));

// //s.25
// const n = parseInt(prompt('Skriv ett heltal: '));
// function summa(n) {
//     if(Number.isInteger(n)) {
//         // console.log('yep');
//         if(n === 0) return 0;
//         else if(n < 0) return -1;
//         return n + summa(--n);
//     }else {
//         alert('Fel! Skriv ett nummer!');
//     }
// }
// summa(n);

// // s.26
// function squareSum() {
//     const input = prompt('Ange två tal med en , däremellan');
//     const arr = input.split(',');

//     for(let i = 0; i < arr.length; i++) {
//         return arr[0] * arr[0] + arr[1] * arr[1];
//     }
// }
// console.log(squareSum());

// //s. 27
// for(let i = 1; i <= 100; i++) {
//     let res = '';
//     if(i % 3 === 0) res += 'Fizz';
//     if(i % 5 === 0) res += 'Buzz';

//     console.log(res || i);
// }
// /* alternatively */
// for(let j = 1; j <= 100; j++) {
//     let output = '';
//     if(j % 3 === 0) output += 'Fizz';
//     if(j % 5 === 0) output += 'Buzz';
//     if(output === '') output = j;

//     console.log(output);
// }

// //s. 28
// const interestRate = parseInt(prompt('Ange räntesatsen i procent: '));
// const totalYears = parseInt(prompt('Antal år man vill gärna spara pengarna: '));
// let capital = 1000;

// document.write('Antal År' + ' | ' + 'Kapital' + '<hr>');

// for(let i = 1; i <= totalYears; i++) {
//     capital = (capital * (1 + interestRate / 100)).toFixed(2);
//     console.log(i + '. ' + capital);
//     document.write(i + ' år' + ' | ' + capital + ' kr' + '<br>');
// }

//s. 30
const h = document.getElementById('h');
h.innerHTML = h.innerHTML.toUpperCase();
h.style.color = 'maroon';

//s. 31
const h2 = document.getElementsByTagName('h2');
h2[0].className = 'nice';

// //s. 32
// const p = document.getElementsByTagName('p');

// for(let i = 0; i < p.length; i++) {
//     if(p[i].innerHTML.endsWith('.') != true){
//         p[i].innerHTML += '.';
//     }
// }

//s. 33
const p2 = document.querySelectorAll('p');

for(let i = 0; i < p2.length; i++) {
    let str = p2[i].innerHTML;
    str = str.charAt(0).toUpperCase() + str.substring(1);
    p2[i].innerHTML = str;
    console.log(str);
}

// //s. 35
// function showMsg() {
//     alert('Welcome!');
// }
// window.addEventListener('load', showMsg);

//s. 36
const btn = document.getElementById('btn');
function bgColor() {
    document.body.bgColor = 'red';
}
btn.addEventListener('click', bgColor);

//s. 37
function myFunction() {
    document.getElementById('demo').innerHTML = 'Hello World!';
}

const btn1 = document.getElementById('btn1');
btn1.addEventListener('click', myFunction);

//s.38
const btn2 = document.getElementById('btn2');
function hideTexts() {
    // document.getElementById('demo1').innerHTML = '';
    document.getElementById('demo1').style.display = 'none';
}
btn2.addEventListener('click', hideTexts);

//s.39
const txt = document.getElementById('txt');
function hideTexts() {
    // txt.style.display = 'none';
    txt.innerHTML = '';
}
// txt.addEventListener('click', hideTexts);
txt.onclick = hideTexts;

//s. 40
const txt1 = document.getElementById('txt1');
function txtColor() {
    // document.getElementById('txt1').style.color = 'green';
    txt1.style.color = 'green';
}
txt1.addEventListener('mousemove', txtColor);

//s. 41
const btn3 = document.getElementById('btn3');
function getTime() {
    document.getElementById('time').innerHTML = new Date().toTimeString().substring(0, 8);
}
btn3.addEventListener('click', getTime);

//s. 42
/*
The script indicates that when the button element with an id of 'btn' is clicked it grabs the element and fires up an event listener which triggers a display() function. This function shows the date string up in the element with the id 'demo'.
*/

//s. 43
/*
When Start button is clicked, a timer runs that will add one * per millisecond as the functin 'count' dictates. As soon as Stop button is clicked, the function stops running. No astrid will be added onto the document.
*/



// let row;
// let col;

// function createTable(row, col) {
//     let table = document.createElement('table');
//     table.setAttribute('border', '1');
//     //as long as row is less than totalYears keep looping
//     for(let i = 0; i < row; i++) {
//         //a detached <tr>
//         let tRow = document.createElement('tr');
//         //inner loop
//         for(let j = 0; j < col; j++) {
//             //a detached <td>
//             let tData = document.createElement('td');
//             tData.textContent = capital;
//             //append tData as many times as cols
//             tRow.appendChild(tData);
//         }
//         //just like how tData added to row add tRow to table
//         table.appendChild(tRow);
//     }
//     document.body.appendChild(table);
// }

// createTable(4, 2);




/**
 * post-increment javascript evaluates the value, then increments and stores it.
 * x = 0
 * 0 + 0
 * y = array[x++] this will get array[0]
 *
 *
 * pre-increment, javascript increments the value , then evaluates and stores it.
 * x = 2
 * y = array[++x] this will get array[1]
 */
/*
for(activity of activities) {
    console.log(activity); //for...of gets value, for...in points at index
}*/