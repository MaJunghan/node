// javascript는 자료형이없고 인자에 자료형이정해져있지않음
// 인자의 이름을 임의로 설정가능.

function add(num1, num2) {
    return num1 + num2;
}

// add라는 함수는 2가지 인자를 받아오는데 어떤 데이터가 들어가는지는
// add라는함수를 호출하는사람이 결정하는것.num1 num2라는이름으로 접근

/*
우리가 함수를 만들떄는 num1  num2라는 변수공간에 어떤데이터를받아오면
num1  num2이름으로 접근을하고 함수를만드는시점에는 데이터가 들어있지않다.
*/


//const doSomething = add;
//const reslut = doSomething(2,3);
//console.log(reslut);
//const result2 = add(2,3);
//console.log(result2);
/*
함수를 정의하면 함수를 실행하는 구문자체가 저장된 레퍼런스 ref가 add라는 함수이름으로 저장되어있는데
인자로 add함수를 전달하면 해당구문자체를 실행하는 ref를 그대로 받아오는것이므로 
Add와 doSomthing은 같은 ref를 가르키고있다.그렇기떄문에 add의 ref를받아와서 값을넣으면 
똑같은값이출력된다.
*/

/*
// 함수옆에 인자를 설정해주면 받아옴
function print(name, age) {
    console.log(`${name} + ${age}`);
}

print('kakao', 88);// 프린트를 호출하면서 인자를 전달하려해도 절대 전달되지않음.
*/

function divide(num1, num2) {
    return num1 / num2;
}

function surprise(callback) { // 2. 인자는 add
    const result = callback(3,4); // 3. add(3,4)
    console.log(result);
}

surprise(divide); // 1.서프라이즈함수에 add함수를전달