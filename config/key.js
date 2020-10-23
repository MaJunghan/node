if(process.env.NODE_ENV === 'production') { // 환경변수를받아서
    module.exports = require('./prod'); // 배포후 : 헤로쿠,클라우드
} else{
    module.exports = require('./dev'); // 배포전 : 로칼
}