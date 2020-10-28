// 1.Use strict
'use strict'

// 2.Variable
// let (ES6)
let globalname = 'global name'; // 전역변수
{
    let name = 'junghan';
    console.log(name);
    name = 'hello';
    console.log(name); // 지역변수
    console.log(globalname);
    var name2 = '억지출력' 
}
//console.log(name);
console.log(globalname);
console.log(name2);

//var를 안쓰는이유
//문제1:호이스팅
//문제2:블록지정x


// 3.const:상수
const day = 7;
console.log(day);

// 4. Variable types 자료형
// primitive, single tiem : number string boolean null undefiedn symbol
// object, box container : 싱글을 여러개묶은것
// function, first-class function : 변수 파라미터 함수리턴값으로 사용가능

// 5.Dynamic typing: 선언할때 어떤타입인지 설행하지않고 프로그램이 실행될때
// 자료형이 할당됨. 그래서 자료형선언 안해도되는것.
let text = 'hello';
console.log(text.charAt(0));

// object
const ma = { name: 'junghan', age:29 };
ma.name = 'toto';
console.log(ma.name, ma.age);
