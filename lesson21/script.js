"use strict";

var str = 'Я программист';
console.log(str.charAt(3)); // Я
console.log(str.charAt(str.length-1)); //т

console.log(str[0]); //Я

var str2 = str[0] + [1] + [3];


console.log( str[3].toLowerCase());

console.log( str[3].toUpperCase());

console.log( str.indexOf('м', 2));
//console.log( str.lastindexOf('м', str.length - 3));


var target = 'м';
var pos = 0;
while (true) {
    var foundPos = str.indexOf(target, pos);
    if(foundPos == -1) break;
   console.log(foundPos);
   pos = foundPos + 1;

}

console.log( str.substring(0, 5));

console.log( str.substr(3, 3));

console.log( str.slice(1, 3));

console.log( 'testme'.substring(-2));
console.log( 'testme'.slice(-2));

var str3 ='';
for(var i = 1034; i <= 1113; i++){
    str3 += String.fromCharCode(i);
}
//alert(str3);

console.log('абрикос'.charCodeAt(0));

// ОБЪЕКТЫ

var obj = {};

obj.name = 'Андрей';
obj.age = 25;

console.log(obj.name + '-' + obj.age);

delete obj.age;


var obj2 = {
    'name' :'Андрей',
    'age' : '25',
    'weight' : undefined,
    length: 123 
};

if('name' in obj2){
    console.log('Такое имя есть');
}

console.log( obj2.weight); //undefined

if(obj2.weight === undefined){

}

obj2['name last'] = 'Вася';
obj2.name = 'Вася';

var key = 'name';
obj2[key] = 'Вася';
obj2['lastname'] = 'Петров';

var obj4 = {
    'name': '',
    'phone': '',
    'items' : {
        1: {
            'имя товара': '',
            'price' : 100
        },
        2: {
            'имя товара': '',
            'price' : 100
        },
        3:{

        }
    },
    'time delivery' : '10:00'
};

obj4.items['1'].price;
obj4['items']['1']['price'];

var counter = 0;
for(var key in obj4){
    console.log( 'Ключ:' + key + 'Значение:' + obj4[key] );
    counter++;
}


var codes = {
    '7' : 'Россия',
    '38' : 'Украина',
    '1' : 'США'
}; // 1 7 38

 codes = {
    '+7' : 'Россия',
    '+38' : 'Украина',
    '+1' : 'США'
}; // +7 +38 +1

var clone = {};
for (var key in codes){
   clone[key] = codes[key];
}

var arr = [];

var arr = ['Яблоко', 'Апельсин', 'Слива'];

console.log(arr[0]);

arr[0] = 'Груша';
arr[3] = 'Мандарин';

console.log(arr.length); // 4

console.log(arr); //Полный массив

var arr2 = [3, 'Вася', {name: 'Петр'}, true];

arr2[1000] = 'привет';

arr.pop()// удалится последний элемент

arr.push('Груша');// добавит элемент в конец
arr[arr.length] = 'Груша';


arr.shift('Груша'); // Убирает элементы в  конце
arr.unshift('Груша'); // добавит в начало элемент \\ unshift ('Груша', 'Яблоко', 'Кукуруза')