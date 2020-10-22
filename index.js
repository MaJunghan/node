const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')
mongoose.connect('mongodb://JungHan:1234@junghan-shard-00-00.ltl4f.mongodb.net:27017,junghan-shard-00-01.ltl4f.mongodb.net:27017,junghan-shard-00-02.ltl4f.mongodb.net:27017/<dbname>?ssl=true&replicaSet=atlas-116c4k-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify: false
}).then(() => console.log('Dongo db Connected..'))
  .catch(err => console.log(err))

app.get('/', (req, res) => res.send('hello world'))

app.listen(port, () => console.log(`Example ${port}`))

