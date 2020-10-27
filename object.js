// Objects : 키와 벨류의 집합체

// Literals and properties

// 기본자료형들은 하나의 값밖에 저장을못함 -> 오브젝트사용

//오브젝트 생성방법2가지
const obj1 = {}; // 1. 1번방법을 많이사용.
const obj2 = new Object(); //2: 오브젝트에서 생성된 생성자가 호출됨.
 

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const ellie = { name:'ellie', age: 4}; // class가없어도 {} 오브젝트생성가능
// 그래서 이렇게 오브젝트로바꾸면 한번에 저장하고 파라미터도 person으로한번에 
print(ellie); // 호출도한번에 

ellie.hasJob = true; // 실행시점에 작성되기떄문에 이런짓도할수있음(추가)
console.log(ellie.hasJob);


console.log('==================')
// 2.계산된 properties
console.log(ellie.name); // 코딩하는순간 
console.log(ellie['name']); // 어떤키가 필요할지모를때 : 런타입될때
ellie['hasJob'] = true;
console.log(ellie.hasJob);

function printValue(obj, key) {
    console.log(obj[key]);
}

printValue(ellie,'name');
printValue(ellie,'age');

console.log('==================')
// 3.Property value 
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
// 근데 여기서 4번을 추가해야되 ? 너무귀찮아
const person4 = new Person('junghan' ,29); // 생성자함수를 new해서사용
console.log(person4);

// 4. Constructor Function
// 생성자함수 <-- 클래스가있기전에 이렇게많이사용
function Person(name, age) {
    {   // this = {};
        this.name = name;
        this.age = age;
        // return this;
    }
}
console.log('==================')


// 5. in operator 
console.log('name' in ellie); // name이란 키가 있는지없는지 확인
console.log('age' in ellie);
console.log('random' in ellie);
console.log(ellie.random);

console.log('==================')
// 6.for..in  vs for..of
// for (key in obj)
for(key in ellie) { // ellie라는키가 key로 할당 
    console.log(key);
}

// for(value of iterable)
const array = [1,2,3,4,5];
for(value of array) { // 배열
    console.log(value);
}

console.log('==================')
// 7. Fun cloning
const user = {name: 'ellie', age: '20'}; // user라는 레퍼런스가저장
const user2 = user;  // user의 레퍼런스가 그대로저장되어잇어서
user2.name = 'junghan'; //user2번의 name을 변경했지만
console.log(user.name); // user의 name까지 변경되는것을 확인

// 오브젝트를 복제하고싶으면? 
//const user4 = {}; // 복사할 오브젝트생성
//Object.assign(user4, user);// 앞에 생성할오브젝트,뒤 복사할오브젝트
const user4 = Object.assign({}, user); // 한줄
user4.name = 'dingo'; // user4의 name을바꿔도 해당name만 변경확인
console.log(user4.name); 
