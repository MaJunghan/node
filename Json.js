// JSON
// JavaScript Object Notation

// 1. Object > Json(String) 변환방법
// stringfy(obj)

// 기본자료형도 오브젝트변환 true
let json = JSON.stringify(true);
console.log(json); 

console.log('================');
// 배열도 오브젝트변환 ' => " 변환
json = JSON.stringify(['apple','banana']);
console.log(json);


console.log('================');
// 오브젝트 
// jump함수는 오브젝트의 데이터가 아니기떄문에 제외
// symbol도 제외. 
const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthData: new Date(),
    jump: ()  => { 
        console.log(`${name} can jump!`);
    },
}

json = JSON.stringify(rabbit);
console.log(json);

console.log('================');

json = JSON.stringify(rabbit, ['name','color']);
console.log(json);

console.log('================');

json = JSON.stringify(rabbit, (key, value) =>{ // key value를 전달받는 콜백함수를 전달하게되면
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'junghan' : value; // name이라는 key가있으면 이름을 정한
});
console.log('================');
console.log(json);



// 2. Json(String) > Object 변환방법
// parse
console.clear();
console.log('================');
json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
console.log(obj);
