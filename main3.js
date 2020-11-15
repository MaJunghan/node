class Counter {
    constructor(runEveryFiveTimes) {  // 1. 생성자가 콜백함수를받음
        this.counter = 0; 
        this.callback = runEveryFiveTimes; // 2.this로 변수에 저장
    }
    // 자체적으로 counter라는 변수가있고
    // 클래스를이용해서 obj을만드는순간 0으로 설정

    // class안에서는 function안쓰고 함수생성가능
    increase() { // 2.printSomething를 인자로받아옴
        this.counter++;
        console.log(this.counter);
        if(this.counter % 5 === 0) {
           this.callback && this.callback(this.counter); // 3. === printSomething(this.counter);
           // 3. this.callback변경
        }
    }
}

const printCounter = new Counter(printSomething); //4. 생성자생성할떄 전달
const alertCounter = new Counter(alertNum);

function printSomething(num) { // 4. runif5Times과 printSomething 같은 ref
    console.log(`wow! ${num}`); // this.counter값이 num으로 
}
function alertNum(num) { // 4. runif5Times과 printSomething 같은 ref
    alert(`wow! ${num}`); // this.counter값이 num으로 
}


printCounter.increase(); // 1.coolCounter.increase실행할떄마다 
printCounter.increase(); // printSomething함수를 runif5Times자리로
printCounter.increase(); // 인자로주고 해당 인자를 실행시키는것
printCounter.increase();
printCounter.increase();
//alertCounter.increase();  
//alertCounter.increase();  
//alertCounter.increase();  
//alertCounter.increase();  
//alertCounter.increase();  

/* 정리
해당 클래스를 인스턴스 생성할떄 생성자에 콜백함수를 전달하고 
생성자는 그것을 인자로받아서 변수에 저장한다.
increase를 호출할떄마다 저장된 변수를 호출시키면 똑같다 
*/

