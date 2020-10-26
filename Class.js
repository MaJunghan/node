'use strict';

const { emit } = require("nodemon");

// Class : ES6부터나옴, 그전에는 템플릿없이 바로 오브젝트생성
// 템플릿 -> 오브젝트

// 1.클래스 선언방법
class Person {
    // construtor : 생성자를 통해서받은 데이터를
    constructor(name, age) {
        // fields : 할당
        this.name = name; 
        this.age = age;
    }

    // methods
    speak() {
        console.log(`${this.name}: hello`);
    }
}

const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

console.log('=======================');
// 2. Getter and Setter
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    //  호출(get) = 할당(set)
    }
    // get이라는 키워드로 값을 리턴하고
    get age() {
        return this._age;
    }
    // set이라는 키워드로 값을 설정할수있다.
    set age(value) {
        // if (value < 0) {
        //    throw Error('age can not be negative');    
        // }
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);

console.log('=======================');
// 3. Fields (public, private) 
class Experiment {
    publicField = 2; // 외부에서접근가능
    #privateField = 0; // 외부접근불가
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);
console.log('=======================');
// 4. Static : properties and methods 공통적인 메서드 속성값
// 스태틱메서들은 해당 클래스 Artical로 호출하여야함.
class Artical {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber; 
    }

    static printPublisher() {
        console.log(Artical.publisher);
    }
}

const article1 = new Artical();
const article2 = new Artical();
console.log(article1.publisher); // 값이안나옴
console.log(Artical.publisher);  // 드림코딩
Artical.printPublisher();

console.log('=======================');
// 5. Inheritance : 상속 , 다형성
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape{} // extends를 이용해서 상속
class Triangle extends Shape{
    getArea() {
        super.getArea();
        return (this.width * this.height) / 2; // 삼각형은 높이 /2 해줘야해서 오버라이딩사용.
    }
    draw() {
        super.draw(); // 부모의 메서드호출하고 싶으면 슈퍼
        console.log(`drawing ★ color of`); // 오버라이딩: 재정의시 부모의메서드가아니라 자식의 매서드를사용
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea()); 
console.log('======================='); 
const triangle = new Triangle(20, 20, 'red'); // 삼각형은 높이*길이/2
triangle.draw();
console.log(triangle.getArea()); 


console.log('======================='); 
// 6.Class checking : instanceOf
// 왼쪽의있는 오브젝트가 오른쪽의 클래스의 인스턴스인지 확인하는방법
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(rectangle instanceof Object);

