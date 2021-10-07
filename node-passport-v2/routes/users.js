import express from "express";
import passport from "passport";
import users from "../models/user.js";

// const users = require("../models/user.js");
const router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});
// http://localhost/users로 응답
router.post("/", (req, res) => {
  // 로그인이 수행되어서 session이 유효한 경우에는 req.user 속성이 존재한다
  // 로그인이 안 되거나 session이 유효하지 않으면 req.user가 없다

  // session 정보가 존재를 하면 현재 res.user 정보를 Client에게 전송
  // 	없으면 빈 배열([])을 전송하여 session이 없음을 통보
  if (req.user) {
    console.log("Session OK");
    res.json(req.user);
  } else {
    res.json([]);
  }
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

/**
 * Client에서 Server로 데이터 전송하는 방법
 * queryString : 주소창에 `?변수1=값&변수2=값`과 같은 형식으로 전송
 * 		http://localhost:8080/user?id=root&password=1234
 *	=> Server에서 받을 때는 req.query.변수명
 * PathVariable : 주소창에 보내는 데 URL과 섞어서 보내는 방식
 * 		http://localhost:8080/user/root/1234 -> 변수명은 보이지 않고 결과값만 보냄.
 * 	=> router.get("/user/:id/:password")
 * 	=> Server에서 받을 때는 req.params.변수명
 *
 * POST로 전송된 데이터는 전송되는 순간 노출을 최소화할 수 있다.
 * https를 사용하면 데이터가 암호화되어 전송된다
 *	=> Server에서 받을 때는 req.body.변수명
 *
 */
router.post("/join", (req, res) => {
  const { userId, password, email } = req.body;

  console.log("ID", userId);
  console.log("Password", password);
  console.log("E-mail", email);

  // 방법 1
  const userVO = new users(req.body);
  userVO.save((err, data) => {
    res.json(data);
  });

  // 방법 2
  //   users.create(req.body);
  //   res.json("성공");
});

/**
 * passport로 Login된 경우 req.logout() 함수가 생성되며
 * 해당 함수를 호출하면 passport Logout이 수행된다.
 */
router.post("/logout", async (req, res) => {
  await req.logout();
  // 저장된 session 삭제
  await req.session.destroy((err) => {
    res.send({ message: "Logout OK!!" });
  });
});

export default router;
