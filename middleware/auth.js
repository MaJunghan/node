const {User} = require('./models/User');


let auth = (req, res, next) => {
    // 인증처리를 하는곳.

    // 클라이언트 쿠키에서 token을 가져온다.
    let token = req.cookies.x_auth;

    // 토큰을 복호화한후 user._id를찾는다
    User.findByToken(token, (err, user) => {
        // user가 없으면 
        if (err) throw err;
        if (!user) return res.json({ isAuth: false, error: true })
        // user가 있으면
        req.token = token; // 여기에서 받아올떄 토큰과 user를저장해서
        req.user = user;
        next(); // 미들웨어에서 다음 펑션으로 넘어가기위해서

    }) 

    // user._id가 있으면 인증 ok

    // user._id가 없으면 인증 no

}

module.exports = { auth };
// 다른곳에서 auth라는 모듈을 임포트할수있게한다.