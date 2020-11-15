// 1. async : promise를 생략하여 정의가능.

const { response } = require("express");


/*
function fetchUser() { 
    // 네트워크 연결 데이터받아오는데 10초걸림
    return 'ellie';
} 
비동기로 바꿔줘야함 => promise
*/
async function fetchUser() {
    return 'ellie'
}

const user = fetchUser();
user.then(console.log);

// 2. await : async가 붙은 함수안에서 사용할수있는함수
// 해당 구문이 실행될떄까지 기다려

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(2000);
    return '사과';
}

async function getBanana() {
    await delay(1000);
    return '바나나';
}
/*
function pickFruits() {
    return getApple().then(apple => {
        return getBanana().then(banana => `${apple} + ${banana}`);
        });
}

*/

// 이렇게 사과와 바나나를 모두리턴하는 pickFruits함수를 생성.
// 근데 체이닝이 너무많아서 복잡
// 이렇게 async 사용하여 짧게사용할수있음
/*
async function pickFruits() {
    const apple = await getApple();
    const banana = await getBanana();
    return `${apple} + ${banana}`;
}
pickFruits().then(console.log);
*/
//근데 문제점이 생김 => 사과와 바나나를 가지고오는데 각각 기다리기떄문에 동시처리안됨.
async function pickFruits() {
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
}
pickFruits().then(console.log);
// 이렇게하면 getApple와 Banana가 각각 변수에 담기면서 실행되서
// 각각 병렬 처리가됨 => 출력


// 3.useful APIs (Promise API)
function pickAllFruits() {
    // Promise.all 
    // Promise배열을 전달하면 모든 Promise를 병렬적으로처리하고 모아줌
    return Promise.all([getApple(), getBanana()]).then(fruits => 
       // 모아진 배열을 전달하고그것을 String으로 묶음
        fruits.join(' + ') 
    ); 
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
    // Promise.race: 병렬처리중 가장먼저되는것만 출력함.
    return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);
