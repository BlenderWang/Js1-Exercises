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

//s.18
const favFoods = ['Ärtsoppa', 'Röd Curry', 'Spaghetti Bolognese', 'Pizza Hawaii', 'BBQ', 'Dumplings', 'Tempura'];
const meal = Math.floor(Math.random() * favFoods.length);
const day = Math.floor(Math.random() * 6) + 1;

if(day == 5) {
    document.write('Du ska äta ute idag!');
}else{
    document.write(`Dagens maträtt är ${favFoods[meal]}.`);
}

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