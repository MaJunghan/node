var i = 0;
while(i < 1) {
    console.log('C1');
    console.log('C2');
    i = i + 1;
}
// else 가 없어도 되네 ?;
console.log('D3')

console.log('=========================')

for(var i=0; i<2; i++) {
    console.log('C1');
    console.log('C2');
}
console.log('D')
// 앞에 2번씩돌고 d출력됨 


console.log('======================================')

var arr = [1,2,3,4,'junghan','gogo'];
console.log(arr[3]);
console.log(arr.length);
arr.push(9);
console.log(arr);

console.log('======================================')
// 배열 length
var number = [1,400,12,34,5,6,9,6,4];
var i = 0;
var total = 0;
while(i < number.length) {
    console.log(number[i]);
    total += number[i];
    i = i + 1;
}
console.log(`배열의 총누적값은 ?? ${total}`);