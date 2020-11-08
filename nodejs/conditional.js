var args = process.argv;
// 3번째 값부터 사용자가 입력한 값을받아옴

console.log('A');
console.log('B');
// 받아온 값으로 조건문을 제어할수잇음.
if(args[2] === '1') {
    console.log('C1');
} else{
    console.log('C2');
}
console.log('D');