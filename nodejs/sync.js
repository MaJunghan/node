var fs = require('fs'); // fs모듈을 가지고옴

// readFileSync : 동기 : 리턴값이있음 => 변수에 저장해줘야함.
// A B C 순서대로 출력
console.log('A');
var reslut = fs.readFileSync('sample.txt','utf8');
console.log(reslut);
console.log('C');

console.log('======================================');
// readFile : 비동기 : 리턴값이없음 => 다끝나고 해당함수에 값할당.
// 일이 끝나는 순서대로 실행
console.log('A'); //1번실행
fs.readFile('sample.txt','utf8', (err, reslut) => {
    console.log(reslut); //3번실행
})
console.log('C'); //2번실행
