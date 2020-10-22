const mongoose = require('mongoose')


const userSchema = mongoose.Schema({
    name: {
        type : String,
        maxlength: 50 
    },
    email: {
        type : String,
        trim : true, // 이메일에 스페이스바 공백을없앤다,
        unique : 1 // 이메일은 하나만있어야하니까 유니크값
    },
    password: {
        type : String,
        minlength: 5
    },
    lastname:{
        type : String,
        maxlength: 50
    },
    role: {
        type: Number,   // 0일반회원 1이면 관리자 , 지정안하면 0
        default: 0
    },
    image: String,
    token: {
        type: String    // 유효성검사용도
    },
    tokenExp:{          // 토큰의 유효기간
        type: Number
    }
})

const User = mongoose.model('User', userSchema) // 스키마를 다만들었으면 모델에 유저스키마를 담는다.

module.exports = {User} // 다른곳에서도 사용가능해야하니까 emports해줌! 모델을.