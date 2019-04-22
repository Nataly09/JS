"use strict";
//№1
console.log('№1');
var arrWords = ['Кот', 'Собака', 'Жираф'];
function searchArrayWord(word, arr1) {
    for (var i = 0; i < arr1.length; i++) {
        if (word === arr1[i]) {
             return true 
            }
    }
    return false;
}
console.log(searchArrayWord('Кот', arrWords));

//№2
console.log('№2');

var arr = [1, 2, 3, 7, 6, 9];
var c = 0;
for (var i = 0; i < arr.length; i++){
    var sum = c + arr[i];
    c = sum;
    var n = sum / arr.length;
}

console.log(n);

//№3
console.log('№3');
var arr2 = [1, 3, 5, 6, 7, 9];
var lastarr2 = [];
for (var i = 1; i <= arr2.length; i++){
    lastarr2.push(arr2[arr2.length - i]); 
}
console.log(lastarr2);


//№4
console.log('№4');
    var obj = {html:'HTML', css: 'CSS', js: 'ECMA'};
    var keys = [];
     for ( var key in obj){
         keys.push(key);
     }
     console.log(keys);
   
//№5
console.log('№5');

var obj1 = {
    'name': '',
    'phone': '',
    'address': '',
    'generalsum': 830,
    'sumWeight': 2700,
    'items' : {
        1: {
            'nameProduct': 'Чашка',
            'price' : 100,
            'Weight': 200,
        },
        2: {
            'nameProduct': 'Ложка',
            'price' : 30,
            'Weight': 100,
        },
        3:{
            'nameProduct': 'Чайник',
            'price' : 550,
            'Weight': 2000,        
        },
        4:{
            'nameProduct': 'Кружка',
            'price' : 150,
            'Weight': 400,
        }
    },
};