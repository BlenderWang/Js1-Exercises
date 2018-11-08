//Uppgift 1
while(true) {
    const input = prompt('Ange ditt födelsedatum i detta format ÅÅÅÅ-MM-DD', 'ÅÅÅÅ-MM-DD');

    if(input === null) break;

    if(input.length !== 10 ) {
        alert('Felaktigt antal tecken');
        continue;
    }

    //...same as the solution below with multiple if statements
}

// const input = prompt('Ange ditt födelsedatum i detta format ÅÅÅÅ-MM-DD', 'ÅÅÅÅ-MM-DD');

// function rightInput() {
//     const birthYear = parseInt(input.substring(0, 4));
//     const birthMonth = parseInt(input.substring(5, 7));
//     const birthDate = parseInt(input.substring(8, 10));
//     const currentYear = new Date().getFullYear();
//     const currentMonth = new Date().getMonth() + 1;
//     const currentDate = new Date().getDate();

//     if(input.length != 10 || input.charAt(4) != '-' || input.charAt(7) != '-')
//         alert('Försök igen! Vänligen använd detta format ÅÅÅÅ-MM-DD');
//     else if(birthYear <= 0 || birthYear > currentYear)
//         alert('Felaktigt födelsår!');
//     else if(birthMonth <= 0 || birthMonth >= 13)
//         alert('Felaktig fördelsmånad!');
//     else if(birthDate <= 0 || birthDate >= 32)
//         alert('Felaktig fördelsdatum');
//     else
//         console.log(`${input}`);

//     document.write(`Du har angett följande födelsedatum ${input}`);
// }
// rightInput();
// document.write('<br>');

function calc() {
    const date1 = new Date();//2018-11-04
    //a given person's birthday
    const date2 = new Date(input); //'1973-12-02'
    // console.log(date1 === date2); //false
    // console.log(date1 - date2); //1417709663881
    const diff = date1 - date2;

    let days = Math.floor(diff / (24 * 60 * 60 * 1000));
    // console.log("d: " + days);  //16408
    let months = Math.floor(diff / (30 * 24 * 60 * 60 * 1000));
    // console.log('m : ' + months);   //546
    let years = Math.floor(diff / (365 * 24 * 60 * 60 * 1000));

    months = Math.floor((days - years * 365) / 30);
    // months = Math.floor(months % 12);
    days = Math.floor(((days - years * 365) / 30 - months) * 31);
    // days = Math.floor(days % 30);

    console.log('days: ' + days);
    console.log('months: ' + months);
    console.log('years: ' + years);

    document.write(`Du är ${years} år, ${months} månader och ${days} dagar gammal.`);
}
calc();


// var date1 = new Date('November 04, 2018 03:24:00');
// //when I was born
// var date2 = new Date('1987-11-10T03:24:00');
// console.log(date1 === date2);
// // expected output: false;
// console.log(date1 - date2);
// var time = date1 - date2;
// // expected output: 0
// var date3 = new Date(time);
// var days = Math.floor(time / (24*60*60*1000));
// var years = Math.floor(time / 31536000000);
// console.log(days);
// console.log(years);

//Uppgift 2
let paragraph = document.querySelector('#paragraph').innerHTML;

let cap = false;
for(let i = 0; i < paragraph.length; i++) {
    if(i === 0) cap = true;
    if(paragraph[i] === '.') cap = true;
    if(paragraph[i].match(/[a-zöäå]/i) && cap === true) {
        cap = false;
        paragraph = paragraph.substr(0, i) + paragraph[i].toUpperCase() + paragraph.substr(i + paragraph[i].length);
    }
}
console.log(paragraph);
document.querySelector('#paragraph').innerHTML = paragraph;


/********************************************************** */
//teacher's choice
//Uppgift 1
while(true){
    let birthdate =  prompt("Ange ditt födelsedatum i detta format ÅÅÅÅ-MM-DD" , "1973-12-01");
    console.log(birthdate);
    // Om användaren klickar på knappen Avbryt eller tycker på ESC
    if(birthdate === null){
        break;
    }
    if(birthdate.length !== 10){
        alert("Felaktigt antal tecken!");
        continue;
    }
    if(birthdate.charAt(4) !== '-' ){
        alert("Första - saknas!");
        continue;
    }
    if(birthdate.charAt(7) !== '-' ){
        alert("Andra - saknas!");
        continue;
    }
    // xxxx-xx-xx
    birthdate = birthdate.split('-');
    console.log(birthdate);
    let year = birthdate[0];
    year = Number(year);
    if(isNaN(year)){
        alert("Felaktigt år")
        continue;
    }
    let month = birthdate[1];
    month = Number(month);
    if(month < 1 || month > 12 || isNaN(month)){
        alert("Felaktig månad");
        continue;
    }
    let date = birthdate[2];
    date = Number(date);
    if(date < 1 || date > 31 || isNaN(date)){
        alert("Felaktig dag");
        continue;
    }
    /*
    Programmet ska räkna ut personen ålder.
    */
    /*
    Visa på webbsidan hur många år, månader och dagar personen är gammal.
    */
    let now = new Date();
    let nowYear  = now.getFullYear();   // 2018
    let nowMonth = now.getMonth() + 1;  // 11
    let nowDate  = now.getDate();       // 7
    console.log(nowYear, nowMonth, nowDate);
    // OBS! Mina variabler heter year, month, date
    console.log(year, month, date);
    let years = nowYear - year;
    let months = nowMonth - month;
    if(months < 0){
        years--;
        months +=12;
    }
    let days = nowDate - date;
    if(days < 0){
        months--;
        days += 31;  // OBS! En bugg
    }
    console.log(years);
    console.log(months);
    console.log(days);
    console.log(birthdate);
    let el = document.getElementById('birthdate');
    el.innerHTML = "<h2>Du har angett följande födelsedatum " + birthdate.join('-') + "</h2>";
    el.innerHTML += "<h2>Du är " + years + " år, " + months + " månader och " + days + " dagar gammal.</h2>";
    break; // Avsluta programmet
    } // while


//Uppgift 2
// 1. Hämta alla p-taggar
let allP = document.getElementsByTagName('p');
// 2. Gå igenom alla p-taggar (loop)
for (let i = 0; i < allP.length; i++) {
    // 2.1. Spara alla meningar i en array
    let p = allP[i]; // Referens till p-taggen
    let stycke = p.innerHTML.split('.');
    // 2.2. Iterera över arrayen (en inre loop)
    for (let i = 0; i < stycke.length; i++) {
        // 2.2.1. Ändra den första bokstaven till versal
        stycke[i] = capitalize(stycke[i]);
    }
    // 2.3. Konvertera till sträng och uppdatera DOM
    p.innerHTML = stycke.join('. ');
}  // Avslutar loopen med allP
function capitalize(s){
    if(s.length < 1)
        return;
    s = s.trim(); // Rensa alla blanka tecken
    return s[0].toUpperCase() + s.substring(1);
}