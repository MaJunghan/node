// 배열 : 순서가있음, index [0][1][2]
// index로 값을찾음.
var member = ['egoing','junghan','k8805']
console.log(member[0]);
var i = 0;
for(var i=0; i<member.length; i++) {
    console.log(member[i]);
}

console.log('====================================');

// 오브젝트 : 순서없음.
// key로 value찾음
var members = {
    'name' : 'junghan',
    'age' : 29
}
console.log(members.age);
console.log(members['age']);
console.log('====================================');
for(var name in members) {
    console.log('obj :',name, 'key값 출력:',members[name]);
} 
console.log('====================================');
console.log(members.age);