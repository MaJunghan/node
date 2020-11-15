// 함수 선언 : 어떤값을 받아올건지 인자들을 정의하고 코드블럭작성
// 선언만하면 함수는 수행하지않는다.
/*
function doSomething(add) { // add함수를 인자로받아서 console.log
    console.log(add)
    const reslut = add(2,3);
    console.log(reslut);
}
*/
function add(a, b) {
    const sum =  a + b; 
    return sum;
}
// 함수 호출 : 선언한 함수를 수행하기위해서는 호출해야한다.
// 함수이름(인자);
//doSomething(add); // 이렇게(add)라고해야!!!! 함수자체를 전달

console.log('==========================');
const addFun = add(1,2);
console.log(addFun);


