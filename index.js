const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');
const {User} = require("./models/User");

const config = require('./config/key');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
    useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify: false
}).then(() => console.log('Dongo db Connected..'))
  .catch(err => console.log(err))

app.get('/', (req, res) => res.send('hello world ㅋㅋㅋㅋㅋㅋㅋㅋ'))

app.post('/register', (req , res) =>  {
  // 회원가입할때 데이터받아와서 저장
  const user = new User(req.body) 

  //몽고 db에서 오는메서드
  user.save((err, userInfo) => {
    if(err) return res.json({ success: false, err})
    return res.status(200).json({
      success : true
    })
  }) 
})

app.listen(port, () => console.log(`Example ${port}`))