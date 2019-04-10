"use strict";

// 1
console.log('№1');
function isNumberInRange(number){
    if (number > 0 && number < 10){
        return true;
    }else{
        return false;
    }
};

console.log(isNumberInRange(1));

//2 
console.log('№2');

function isEven( num ){
    if (num % 2  == 0) {
		return true;
	} else {
		return false;
	}
};

console.log(isEven(10));
//3 
console.log('№3');

var value = +prompt('value?', '');
switch(value){
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2:
    case 3:
        alert( '2,3' );
        break;
}

//4 
console.log('№4');

function min(a, b) {
    return Math.min(a, b);
};
console.log(min(3, 5));
console.log(min(5, -1));
