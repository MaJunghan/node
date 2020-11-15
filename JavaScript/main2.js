// flase : 0, -0, '', null, undefind : 데이터없으면 
// true : -1 , 'hello', [] (텅텅빈배열:오브젝트)
// 오브젝트자체는 다 ~~ true

let obj = {
    name: 'ellie'
}; // 선언하고 값할당x : undefined

if (obj) {
    console.log('true!!');
} else {
    console.log('false!');
}
// 위랑 밑이랑 동일 
// 근데 밑이더 깔끔하기떄문에 밑을많이사용.

obj && console.log(obj.name);