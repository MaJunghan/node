'use strict'

// Callback Hello example
class UserStorage {
    // user로부터 id와 password받고 성공이면 success,실패면 error
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ) {
                onSuccess(id);
            } else {
                onError( new Error('not found'));
            }
        }, 2000);
        // 2초후에 확인
    }


    // 위에서 로그인한 id와 ,password가 일치하면 
    //  onSuccess(id) 받은 id로 user가 ellie가 맞는지확인
    // 권한에따라 오브젝트를줘서값을출력하든 , noaccess 
    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'ellie') {
                onSuccess({ name: 'ellie', role: 'admin' });
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id,
    password,
    user => {
        userStorage.getRoles(
            user,
            userWithRole => {
                alert(`hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
            },
            error => {
                console.log(error);
            }
        );
    },
    error => {
        console.log(error);
    }
);

/*
콜백체인의 문제점 : 콜백지옥
1. 가독성이 떨어진다 => 비즈니스 로직이해 힘듬
2. 에러나 디버깅 굉장히 여러움. 유지보수 어려움 

=> promise
*/