'use strict'

// promise : javascript 안에 내장된 object : 비동기수행 => 콜백대신사용

// 1.상태 : 프로세스가 기능을 실행해서 성공 or 실패 
// 2.P 프로듀서 (정보제공) vs C 컨슈머 (소비자)

// 1. Producer 프로듀서
const promise = new Promise((resolve, reject) => {
    // promist를 사용하는경우 무거운일(network, read files)
    console.log('doing somthing...')
    setTimeout(() => {
      resolve('ellie');
      //reject(new Error('no network')); //djszhxm
    }, 2000);
});
// 이처럼 해당 doing somthing이 바로실행되는것을 볼수있음
// 네트워크 연결을할시 연결이 다되면 이런식으로 처리해서 결과를알려줌
// 문제는 사용자가 요청시만 해당값을달라고했을때에는 이러한방식이
// 맞지않음을 유념해야함.


 
// 2. Consumers 컨슈머 : then, catch, finally 이용해 값을 받아올수있음.
// then : promise가  잘수행되어서 resolve가 value의 파라미터로 전달되어서 들어와줌.
// catch : then의 리턴값은 promise에 catch를 등록하는것.
promise
    .then((value) => {
        console.log(value);
    })
    .catch((value) =>{
        console.log(value);
    })
    .finally(() => {
        console.log('성공하든 실패하던 출력됨.')
    });



// 3. promise 사용하기
const fetchNumber = new Promise((resolve, reject) =>{
    setTimeout(() => resolve(1), 1000); // resolve에 1을전달
})

fetchNumber
    .then(num => num *2 )
    .then(num => num *3 )
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num -1), 1000);
        })
    })
    .then(num => console.log(num));

// 이처럼 then은 promise의 값을바로처리할수도있지만,
// 받아서 다시 여러가지를 묶어서 처리할수도있음.



// 4. Error handling 에러 핸들링
const getHen = () =>
    new Promise((resolve, reject) =>{
        setTimeout(() => resolve('닭'), 1000);
    });
const getEgg = hen =>
new Promise((resolve, reject) =>{
    setTimeout(() => reject(new Error(`error발생!! ${hen} => egg`)), 1000);
});
const cook = egg =>
new Promise((resolve, reject) =>{
    setTimeout(() => resolve(`${egg} => pen`), 1000);
});


/*
이렇게 콜백함수를 전달할때 받아오는벨류를 같은값을할떄 같은벨류 생략가능.
getHen()
    .then(hen => getEgg(hen))
    .then(egg => cook(egg))
    .then(meal => console.log(meal));

getHen() // 닭을받아서 닭이 알을낳고 그알은 달걀프라이
    .then(getEgg)
    .then(cook)
    .then(console.log);
*/
getHen() // 이런식으로 해당 promist의값을 catch로 에러 핸들링가능
    .then(getEgg)
    .catch(error =>{
        return '빵';
    })
    .then(cook)
    .then(console.log);