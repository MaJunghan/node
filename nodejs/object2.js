// 함수는 변수에담아서 사용할수있다.
const s1 = () => console.log(1+1);
s1();

// 배열
 const a = [s1];
 a[0]();

 // 오브젝트
 const o = {
     func:s1
 }
 o.func();