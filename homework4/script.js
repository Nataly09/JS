//№1
console.log('№1');
function fib(n){
var a = 0, b = 1, i = 3;
while (i <= n) {
    var c = a + b;
    a = b;
    b = c;
    i++;
  }
  return b;
}

//№2
console.log('№2');
var num = 0;
for( var n = 1000; n > 50; n /= 2){
    num ++;
}
console.log(num);
