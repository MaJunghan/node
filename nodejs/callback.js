// CallBack : 시작했다가 끝나면알려줘

/*
function a() {
    console.log('A');
}
a();
*/


// function자체를 변수에 할당하여 사용할수있음.
// function의 이름이없기떄문에 익명함수라고함.
var a = function() {
    console.log('A');
}

// 변수이름으로 이렇듯이 호출가능.


function slowfunc(CallBack) { // a라는함수의 값을가지게됨.
    CallBack(); 
}

slowfunc(a); // 결과적으로 변수a의 function 'A'가 실행.