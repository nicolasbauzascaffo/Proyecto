var num = 10;
var i = num-1;


while(num){
    num *= i;
    i--;
    if (i <= 1) break;
}
console.log(num);