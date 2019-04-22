"use strict";

//var arr = new Arrey('','','');

var matrix = [
    [1, 2, 3],
    [3, 2, 1],
    [2, 3, 1],
]

console.log(matrix[0][2]);

// split


var names = 'Маша, Надя, Марина, Наташа';
var arr = names.split(', '); // names.split(', ', 2);

console.log(arr);

//join

var arr3 = ['Маша', 'Надя', 'Марина', 'Наташа'];
var str = arr3.join(';');

// удаление из массива

var arr4 = ['Маша', 'Надя', 'Марина', 'Наташа'];

delete arr4[1];

console.log(arr4[1]);

// splice
var arr5 = ['Маша', 'Надя', 'Марина', 'Наташа'];
arr5.splice(1, 1);

console.log(arr5[1]);

arr5.splice(1, 2, 'Катя', 'Оля');
console.log(arr5);

var removed = arr5.splice(1, 2);

console.log(removed);

arr5.splice( 1, 0, 'Наташа', 'Карина');

console.log(arr5);

arr5.splice(-1, 0, 3, 4);

console.log(arr5);

// slice

var arr6 = ['Почему', 'надо', 'учить', 'JavaScropt'];

var arr7 = arr6.slice(1, 3); //'надо', 'учить'

console.log(arr7);

var arr7 = arr6.slice(1); //'надо', 'учить', 'JavaScropt'

console.log(arr7);

var arr7 = arr6.slice(-2); // 'учить'

console.log(arr7);

// Сортировка

var arr8 = [1, 2, 15];

arr8.sort();

console.log(arr8) // 1, 15, 2

function compareNumeric( a, b){
    if ( a > b){ return 1;}
    if ( a < b){ return -1;}
}

arr8.sort(compareNumeric);

// reverse

/*var arr9 = [1, 2, 3];

arr9.reverse();

console.log(arr9);*/

// concat

var arr9 = [1, 2];

var newArr = arr9.concat(arr7); // concat(1, 2); concat([1, 2], 3);

console.log(newArr);

// indexOf/ lastindexOf

console.log(arr9.indexOf(2) ); // 1(позиция,)
console.log(arr9.indexOf('2') ); // -1 (нету)

// Object.keys(obj)

var user = {
    name : 'Петя',
    age : 38,
};

var keys = Object.keys(user);

console.log(keys);

// forEach

var arr10 = ['Яблоко', 'Апельсин', 'Груша'];

arr10.forEach(
    function(item, i, arr){ // item - елемент массива, i - номер в массиве arr - массив
        console.log(i + ':' + item + '(массив:' + arr +')');
});

arr10.reverse().forEach(
    function(item, i, arr){ // item - елемент массива, i - номер в массиве arr - массив
        console.log(i + ':' + item + '(массив:' + arr +')');
});

// filter

var arr11 = [1, -1, 2, -2, 3];

var positiveArr = arr1.filter(function(number){
    return number > 0;
})

console.log(positiveArr);

// map

var names = ['HTML', 'CSS', 'самый популярный язык JavaScript'];

var nameLengths = names.map(function(name){
    return name.length;
});

// every / some

var arr = [1, -1, 2, -2, 3];

function isPositive(number){
    return number > 0;
}

console.log(arr12.every(isPositive)); // false
console.log(arr12.some(isPositive)); // true

// reduce / reduceRiht 

var arr13 = [1, 2, 3, 4, 5];

var result = arr13.reduce(function(sum, current){
    return sum + current;
}, 0);

console.log(result);
/*
1 - sum = 0 current = 1
2 - sum = 0+1 current = 2
3 - sum = 1+2 current = 3
4 - sum = 3+3 current = 4
5 - sum = 6+4 current = 5
return = 10+5
*/

// arguments

function getPhone(name){
    for(var i = 0; i < arguments.length; i++){
        console.log(arguments[i]);
    }
}

getPhone(name, 'address', 'место работы');

//