"use strict";
console.log('№1');

function MinutesToTomorrow() {
  var now = new Date();

  var tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);

  var mintomorrow = tomorrow - now; 
  return Math.round(mintomorrow / 60000); 
}
console.log(MinutesToTomorrow() );


console.log('№2');

function SecondsToday() {
  var now = new Date();
  var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  var secondstoday = now - today; 
  return Math.round(secondstoday / 1000); 
};

console.log( SecondsToday());
console.log('№3');

var now = new Date(2013, 0, 25); 
var message = (now.getDay() == 0) ? 'Bоскресенье':
(now.getDay() == 1) ? 'Понедельник':
(now.getDay() == 2) ? 'Вторник':
(now.getDay() == 3) ? 'Среда':
(now.getDay() == 4) ? 'Четверг':
(now.getDay() == 5) ? 'Пятница':
 'Суббота';

console.log(message);

console.log('№4');

var age = prompt('Введите дату своего рождения:');

var dateOfBirth = new Date(age);
var now = new Date();
var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
var dateOfBirth1 = new Date(now.getFullYear(),dateOfBirth.getMonth(), dateOfBirth.getDate());
var result = Math.round((dateOfBirth1 - today)/ 3600000 / 24);
if ( result  > 0) {
  alert(result  + ' days');
}else{
  var other = 365 + result ;
  alert( other + ' days'); 
};


