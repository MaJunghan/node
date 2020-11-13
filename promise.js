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
/*
fetchNumber
    .then(num => num *2 )
    .then(num => num *3 )
    */