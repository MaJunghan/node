//  Function
// 여러번 재사용이 가능
// 한가지의 일이나 값을 계산하기위해서사용

// function name(param1, param2) {body... return;}
// 펑션 변수이름 파라미터           본문       리턴
// 하나의 함수는 한가지의 일만하도록 만들어야함.
// function은 Object 변수에할당 파라미터전달 리턴값으로전달아돤다.

function printHello() {
    console.log('Hello');
}
printHello(); // 이렇게만드는것보다

function log(message) {
    console.log(message);
} // 파라미터로 내가원하는값을넣어서 출력하는것이좋음
log('Hello@2');
log(1234); // 자료형이 정해지지않아서 아무거나출력가능

// 2.Parammeters 파라미터
function changeName(obj) { 
    obj.name = '정한이 아니야'; // 3.넘겨받은 obj.name으로 접근해서 변경
}

const junghan = { name : 'ellie'};// 1. 오브젝트,junghan이름의 obj 레퍼런스는 잠겨져있음
                                 // 안의 변수 값들은 변경가능 , name:을 ellie라고 선언

changeName(junghan); // 2. changeName을 호출하면서 junghan 레퍼런스값을 obj파라미터로 넘겨줌. 
console.log(junghan); // 4. const junghan을 호출 > 값이 뚜둥

// 3. Default parameters ( ES6 )
function showMessage(message, from = '정한') {
    console.log(`${message} by ${from}`);
}

showMessage('hi');

// 4. Rest parameters ( ES6 ) : ... 시 배열
function printAll(...args) {
    //for(let i=0; i<args.length; i++) {
    //    console.log(args[i]);
    //}
    for(const New of args){
        console.log(New);
    } // args의 값이 차례대로 New로 할당되서하나씩출력

    args.forEach((New) => console.log(New));
}
printAll('dream', 'coding', 'junghan');
console.log('================')
// 5.local scope
// 안에서는 밖을볼수있지만 밖에서는 안을 볼수없다.
let g1 = 'golbal';
function print() {
    let message = 'hello';
    console.log(message); // 지역변수출력
    console.log(g1); // 글로벌변수출력
    (function printto(message) {
        console.log(message); // 자식이 부모의 변수를 출력할수있음
    })(message)
}
print();

// 6.Return a balue 리턴
function sum(a, b) {
  return a+b;
    // 리턴이없는것은 undefined이 생략되어있는것.
}
const result = sum(1, 2);
console.log(`sum: ${result}`);

// 7. Early return, early exit
// bad : 이렇게 조건이안맞을떄 else를 쓰는것보다
//function upgradeUser(user) {
//    if(user.point > 10) {
        //long upgrade logic...
//    }
//} 

// good
//function upgradeUserto(user) {
//    if(user.point <= 10) {
//        return; // 리턴을써서 빨리 구문을끝내는게좋은 구조다
//    } 
    //long upgrade logic...
//}
console.log('=========================')

// function의 할당
const print2 = function () {
    console.log('print');
}
print2();
const printAgain = print2;
printAgain();

console.log('=========================')
// Call back function : function을 전달받아 상황에맞게 호출하는것
function randomQuiz(answer, printYes, printNo) {
    if(answer === 'love you') {
        printYes();
    } else{
        printNo();
    }
}

const printYes = function() {
    console.log('print Yes! 호출');
}
const printNo = function() {
    console.log('printNo 호출!');
}

randomQuiz('love you',printYes,printNo);
randomQuiz('wrong',printYes,printNo);

console.log('=========================')

//Arrow function 
// always anonymous
const simplePrint = function() {
    console.log('simplePrint!');
};
simplePrint();
// function {};를 줄이고 () => 구문
const simple = () => console.log('the simple');
simple();

console.log('=========================')
const add = (a, b) => a + b;
console.log(add(3,4));

