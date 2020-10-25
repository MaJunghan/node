// 1. String concatenation
console.log('my' + 'cat'); // 문자 + 문자
console.log('1'+2); // 문자 + 숫자 = 문자
console.log(`String literals:

''''
1+2 = ${1 + 2}`);
console.log('junghan\'s \nbook'); // ' 문자먹게하려면 앞에 \

// 2. 연산자
console.log(1 + 1); // 더하기
console.log(1 - 1); // 빼기
console.log(1 / 1); // 나누기
console.log(1 * 1); // 곱하기
console.log(1 % 1); // 나누고 나머지값
console.log(1 ** 1); // 제곱

// 3. 증감
let conter = 2;
const preIncrment = ++conter; // 선증가
console.log(preIncrment);
// counter =  counter + 1;

// 4.할당
let x = 3;
let y = 6;
x += y; // x = x + y
console.log(x);

// 5. 비교
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

// 6. 로직 : || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

// || or : 트루가 하나라도있으면 true
// 주의 : 첫번째가 트루면 뒤에 value2와 체크는 실행이안됨.
console.log(`or: ${value1 || value2 || check()}`);

// && and : 트루가 하나라도있으면 flase
// // 주의 : 첫번째가 flase면 뒤에 value2와 체크는 실행이안됨.
console.log(`and: ${value1 && value2 && check()}`);

function check() {
    for (let i=0; i<10; i++) {
        console.log('헉!');
    }
    return true;
}

// ! not 반대로출력 flase>true   true>flase
console.log(!value1);

// 7. == Equality
/*
Javascript에는 다른 언어와는 달리 
== 연산자 말고도 === 연산자가 존재한다. 이들의 차이는 무엇일까?
== 연산자는 동등 연산자로, 피연산자가 서로 다른 타입이면 타입을 강제로 변환하여 비교한다. ... 
하지만 === 연산자는 일치 연산자로, 두 피연산자를 더 정확하게 비교한다
*/

// 8. if
const name = 'ellie';
if(name ==='ellie') {
    console.log('Welcome, Ellie!');
} else if(name === 'coder') {
    console.log('You are amazing coder');
} else {
    console.log('unkwnon');
}

// 9.삼항연산자 ?
console.log(name ==='ellie' ?'yes':'no');

// 10.스위치
const browser = 'Firefox';
switch(browser) {
    case 'IE': 
    case 'Firefox':
        console.log('go away!');
        break;
    case 'Chrome': 
        console.log('love you!');
        break;
    
    default :
        console.log('아무것도!');
        break;
}

// 11.  반복문
// while
let i = 3;
while(i > 0) {
    console.log(`while: ${i}`);
    i--;
}

// for
for (i=3; i >0; i--) {
    console.log(`for: ${i}`);
}

for(let i=3; i>0; i=i-2) {
    console.log(i);
}
// 2중 for문 
/*
for(let i=0; i<10; i++) {
    for(let j=0; j<10; j++ ){
        console.log(`i: ${i}, j:${j}`);
    }
}
*/

// 1~10까지중에 홀수뺴고출력
for(let i=0; i<11; i++) {
    if(i%2 == 1) {
    continue;
    }   
    console.log(i);
}

// 1~10까지 출력하는데 8에서 브레이크
for(let i=0; i<11; i++) {
    if(i == 9) {
        break;
    }
    console.log(i);
}