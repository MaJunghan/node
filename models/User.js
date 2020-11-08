const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { JsonWebTokenError } = require('jsonwebtoken');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
 
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
// 정보들을 유저모델을 저장하기 전에 실행해줌.
userSchema.pre('save', function( next ){
    var user = this; // userSchema를 가리키게 됨.

    if(user.isModified('password')){ // 비밀번호가 바뀔 때만 암호화
        // 비밀번호 암호화
        bcrypt.genSalt(saltRounds, function(err, salt) { // Salt 생성
            if(err) return next(err);
            bcrypt.hash(user.password, salt, function (err, hash){
                if(err) return next(err);
                // Store hash in you password DB
                user.password = hash // 암호화된 비밀번호로 교체
                next(); // 다음꺼 실행(유저모델 저장)
            });
        });
    } else { // 비밀번호가 아닌 다른정보 바꿀시 그냥 넘어감(next())
        next();
    }
});

// 메소드 제작
userSchema.methods.comparePassword = function(plainPassword, cb) { // cb는 callback function

    // plainPassword 1234567    암호화된 비밀번호 $23243n2oidsoidnf232o3ifnwenif
    // plainPassword 암호화해서 DB password와 비교
    bcrypt.compare(plainPassword, this.password, function(err, isMatch){
        if(err) return cb(err); // 비밀번호가 같지 않다.
        cb(null, isMatch); // 비밀번호가 같다. -> isMatch = True
    });
};

userSchema.methods.generateToken = function(cb) {
    
    var user = this;
    // jsonwebtoken을 이용해서 token을 생성하기
    var token = jwt.sign(user._id.toHexString(), 'secretToken'); // user._id + 'secretToken' = token
    // user에 토큰 넣어주기
    user.token = token
    user.save(function(err, user) {
        if(err) return cb(err);
        cb(null, user);
    });
};

const User = mongoose.model('User', userSchema) // 스키마를 다만들었으면 모델에 유저스키마를 담는다.


module.exports = {User} // 다른곳에서도 사용가능해야하니까 emports해줌! 모델을.