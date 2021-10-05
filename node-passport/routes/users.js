import express from "express";
import passport from "passport";

const router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

/**
 * react와 nodejs API를 연동하여 login 구현하기
 * login router는 반드시 POST로 요청해야 한다.
 * oAuth2.0 passport 방식으로 login을 할 때는 정책 상 반드시 POST로 요청을 해야한다.
 *
 * passport를 사용하여 login을 수행할 때 router의 path와 callback() 사이에서 login 정책을 수행할 미들웨어
 * passport.authenticate("local")
 * 		local 정책으로 로그인을 수행함.
 */
router.post("/login", passport.authenticate("local"), (req, res) => {
  //   res.json({ result: "OK" });
  console.log(req.user);
  //   res.json({ user: req.user });
  res.json({ userId: req.user.userId, password: req.user.password });
});

export default router;
