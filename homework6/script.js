"use strict";
console.log('№1');

var arr = [2, -5, 1, -2, 0, -3, 2, -14];
var posArr = arr.filter(function(number) {
    return number >= 0;
  });
console.log(posArr);
  var rootArr = posArr.map(function(name){
           return (Math.sqrt(name));
  });
  console.log(rootArr);

  console.log('№2');

  var arr1 = [4, 3, 5, 5, 0, 4, 8, 6];
  var zero_ = false;

var result = arr1.reduce(function(sum, current, index, array){
    return array.indexOf(0) == -1 || index < array.indexOf(0) ? sum + current : sum;
});

console.log(result);

console.log('№3');
function summArguments(...args){
    return args.reduce(function(sum, current){
        return sum + current;
    });
};

console.log(summArguments(1, 2, 4, 4, 5));

    