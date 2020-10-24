const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
 
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
// pre: save되기전에 이게되서다끝나면 save가실행되고 next의 값이 같이넘어감.
userSchema.pre('save', function( next ){
    // user 스키마를 가르키는것임 this
    var user = this;
    
    // 비밀번호를 변경할떄만
    if (user.isModified('password')) {
    // 비밀번호를 암호화 시킨다.
        // 에러가 나면 index.js의 err로 보내주고
        bcrypt.genSalt(saltRounds,function(err, salt){
            if(err) return next(err) 

            // 성공했으면 hash한값을 보내주는것.    
            bcrypt.hash(user.password, salt, function(err, hash){
                if(err) return next(err)
                user.password = hash
                next()
             })
        })
    } else{
        next()
    }
})

const User = mongoose.model('User', userSchema) // 스키마를 다만들었으면 모델에 유저스키마를 담는다.


module.exports = {User} // 다른곳에서도 사용가능해야하니까 emports해줌! 모델을.