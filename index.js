const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const config = require('./config/key');
const {User} = require("./models/User");
const {auth} = require("./middleware/auth");
// body에 url을담음
app.use(bodyParser.urlencoded({extended: true}));
// json형태로 받을수있음
app.use(bodyParser.json());
// cookieParser사용
app.use(cookieParser());
const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
    useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify: false
}).then(() => console.log('Dongo db Connected..'))
  .catch(err => console.log(err))
app.get('/', (req, res) => res.send('hello world ㅋㅋㅋㅋㅋㅋㅋㅋ'))

// 회원가입
app.post('/api/users/register', (req , res) =>  {
  // 회원가입할때 데이터받아와서 저장
  const user = new User(req.body) 
  // body에서 값을받아와서 세이브되기전에 암호화를 해야함.  
  user.save((err, userInfo) => {
    if(err) return res.json({ success: false, err})
    return res.status(200).json({
      success : true,userInfo
    })
  }) 
})


// 로그인
app.post('/api/users/login', (req, res) => {
  // 요청된 이메일을 데이터베이스에 있는지 찾는다
  User.findOne({ email: req.body.email}, (err, user) => {
    if(!user) {
      return res.json({
        loginSuccess: false,
        massage: "해당하는 유저가없습니다."
      })
    } 
  
  // 요청된 이메일이 맞으면 비밀번호가 맞는지확인 
     user.comparePassword(req.body.password, (err, isMatch) => {
      if(!isMatch) 
        return res.json({ loginSuccess: false, massage: "비밀번호가 틀렷습니다."});
        // 비밀번호도 맞으면 토큰을 생성하기
     user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);
        // 토큰을 저장한다. 어디에 ? 쿠키에
          res.cookie("x_auth", user.token)
            .status(200)
            .json({ loginSuccess: true, userId: user._id})
      })    
     })
  })
})


// auth Router
// auth라는 미들웨어: req받아서 콜백펑션하기전에 중간에서 처리하는것.
// auth.js에서 user와 id를 req에 저장해놔서 바로 저렇게 밑에서 사용할수있는것.
// 이렇게 라우터를 만들어놓으면 어느페이지에서 user정보와 id를 가지고있어서
// 사용할수가있음.
app.get('/api/users/auth', auth, (req,res) => {
  
  // 여기까지 미들웨어를 통과해서왔다는 이야기는 auth가 통과했다라는말.
  res.status(200).json({
    _id: req.user._id,
    isAdmin: req.user.role === 0 ? flase : true,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    lastname: req.user.lastname,
    role: req.user.role,
    image: req.user.image
  })
})

app.get('api/users/logout', auth, (req, res) => {
  User.findOneAndUpdate({ _id: req.user._id },
    {token: ""}
    , (err, user ) => {
      if (err) return res.json({ success: flase, err });
      return res.status(200).send({
        success: true
      })
    })
})






app.listen(port, () => console.log(`Example ${port}`))

