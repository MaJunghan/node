// 내장함수
console.log(Math.round(1.6));
// 얘는 이메일이든 파일든 저장하는 형식으로사용할수있다.
console.log('============================')


// 사용자 정의함수
/*
function sum (first, second) { // parameter 파라미터
    console.log(first+second);
}
sum(2,4); // argument(아규먼트)
이렇게하면 sum의 2와4의값을 function의 파라미터로값을 할당하여 6을출력만함
*/

// sum의 값을사용하고싶다면 ? 6의값
function sum(first, second) {
    console.log('a'); 
    return first + second; //return:뒤에 값을 출력하면서 함수종료
    console.log('b'); // 종료되었기떄문에 출력안됨.
}
console.log(sum(2,4)); // 이렇게하면 sum = 6; 이 리턴된다.
console.log('============================')


