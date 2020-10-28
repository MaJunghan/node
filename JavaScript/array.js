'use strict'

// Array : 배열 같은 오브젝트만(자료형) 넣을수있음.

// 1. 배열 선언
const arr1 = new Array(); // 방법1
const arr2 = [1,2,3,4,5]; // 방법2 주로이걸사용
console.log(arr2);

console.log('===================');
// 2. index position
const fruits = ['★', '●'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]); 
// 배열은 0부터 시작하기떄문에 length -1에서 마지막index출력할수있음.



// 3. Loop

console.log('===================');
// a. for 
for(let i=0; i<fruits.length;i++) {
    console.log(fruits[i]);
}
console.log('===================');
// b. for of
for(let fruit of fruits) {
    console.log(fruit);
}

console.log('===================');
// c. forEach : 콜백함수를 받아옴. index의 값과 value를 다받아옴.
// ★★forEach는 배열안의 벨류들마다 내가전달한 함수를 출력한다.★★
fruits.forEach((fruit, index) => console.log(fruit, index));


console.log('===================');
// 4. Addtion, delete, copy 

//push : add
fruits.push('◆','▲'); // 맨뒤의 index 추가
console.log(fruits);
console.log('===================');

//pop : remove
fruits.pop(); // 맨끝의 index의 값을 삭제한다. ★
console.log(fruits);
console.log('===================');

// unshift : 앞에서부터 데이터를 넣음.
fruits.unshift('㉠');
console.log(fruits);

// shift : 앞에서부터 데이터삭제
fruits.shift();
console.log(fruits);

// note : shift, inshift는 앞에 push와 pop보다 엄청느리다!!
// 배열의 공간의 있다면 push와 pop은 기존의 데이터가 이동을하지않고 마지막공간만 건들이는데
// shift와 inshift는 기존의 데이터이동을 시켜야하기떄문에 느림.
// 배열의 길이가 길면길수록 더느려짐 .


console.log('===================');

// splice : index의 중간값 변경 : 시작지점 : 종류지점 설정반드시
fruits.push('ⓐ','ㄲ','ⓑ'); // 임시값추가
console.log(fruits);
fruits.splice(1,1);         // 삭제
console.log(fruits);

console.log('===================');
fruits.splice(3,1, 'ⓗ','ⓘ')// 'ㄲ'을삭제하고 뒤에 h와 i를추가
fruits.splice(3,0, 'ⓗ','ⓘ')// 'ㄲ'위치에서 아무것도하지않고 h와 i를추가

console.log(fruits);
console.log(fruits.length); //6개

// combine two arrays 
// 2가지 배열을 mix할수있음.
const fruits2 = ['½','⅓']; // 과일2의 arr생성 : 2개
const newFruits =  fruits.concat(fruits2);
console.log(newFruits.length); // 6 + 2 = 8 

// 5. Search 
console.clear();
console.log(fruits);

// : indexOf : index의 위치알려줌(앞에서부터) : 없으면 -1
console.log(fruits.indexOf('ⓗ')); 
console.log(fruits.indexOf('ⓙ')); 

// includes : index가 배열에 존재하는지알려줌 : 없으면 false
console.log(fruits.includes('ⓗ')); 
console.log(fruits.includes('ⓙ')); 

// lastIndexOf : index의위치를 알려줌(뒤에서부터)
console.clear();
fruits.push('ⓗ');
console.log(fruits); // 이렇게 앞뒤로 같은데이터가있을시.
console.log(fruits.lastIndexOf('ⓗ')); // 'h'중 뒤에index부터 위치를알려줌.