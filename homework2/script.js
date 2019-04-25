"use strict";
//1
var a = 1;

if (a === '1') {
    console.log('Верно');
} else {
    console.log('Неверно');
}

var a = '1';
if (a === '1') {
    console.log('Верно');
} else {
    console.log('Неверно');
}

var a = 3;
if (a === '1') {
    console.log('Верно');
} else {
    console.log('Неверно');
}

//2
console.log('2');

var item = false;
if (item != true) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

var message = (item != true) ? 'Верно': 'Неверно';
console.log(message);

var item = true;
if (item != true) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

var message = (item != true) ? 'Верно': 'Неверно';
console.log(message);


//3
console.log('3');
var a = 4;
if (a > 0 && a < 4 ) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

var a = 0;
if (a > 0 && a < 4 ) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

var a = -3;
if (a > 0 && a < 4 ) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

var a = 2;
if (a > 0 && a < 4 ) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

//4
console.log('4');
var c = 2, d = 6;
var Message = (c > 3 && c < 12 || d >= 7 && d < 12) ? 'Верно': 'Неверно';
console.log(Message);

//5
console.log('5');

var month = prompt('Какой сейчас месяц?(введите номер)');
if(month == 12 ||  month > 0 && month <= 2) {
    alert('зима');} else if( month >= 3 && month <= 5 ){
alert('весна');} else if(month >= 6 && month <= 8){alert('лето');}else if(month >= 9 && month <= 11)
{alert('осень');}

//6
console.log('6');

for( var i = 0; i <= 100; i += 2) {
    console.log(i);
}