'use strict'

// Callback Hello example
class UserStorage {
    // user로부터 id와 password받고 성공이면 success,실패면 error
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (
                    (id === 'ellie' && password === 'dream') ||
                    (id === 'coder' && password === 'academy')
                ) {
                    resolve(id);
                } else {
                    reject( new Error('not found'));
                }
            }, 2000);
            // 2초후에 확인
        })
    }


    // 위에서 로그인한 id와 ,password가 일치하면 
    //  onSuccess(id) 받은 id로 user가 ellie가 맞는지확인
    // 권한에따라 오브젝트를줘서값을출력하든 , noaccess 
    getRoles(user, onSuccess, onError) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user === 'ellie') {
                    resolve({ name: 'ellie', role: 'admin' });
                } else {
                    reject(new Error('no access'));
                }
            }, 1000);
        })
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage.loginUser(id, password)
    //.then(user => userStorage.getRoles(user))
    .then(userStorage.getRoles)
    .then(user => alert(`hello ${user.name}, you have a ${user.role} role`))
    .catch(console.log);
// 유저스토리지의 함수로 id와 password를 넘겨주고 맞으면
// getRoles를 호출하여 권한을 확인한다. 맞으면
// alert창으로 원하는 값을출력하고 
// 아니면 catch로 콘솔에 에러내용을 표시.
