import passport from "passport";
import passportLocal from "passport-local";
import { members } from "../models/Member.js";

const LocalStorage = passportLocal.Strategy;

const exportPassport = () => {
  // 로그인이 성공했을 때 (내부에서) 호출되는 함수
  passport.serializeUser((user, done) => {
    console.log("Login Success");
    done(null, user);
  });

  // 로그인이 정상적으로 수행한 후 client에서 세션이 유효한 지 문의가 들어왔을 때 실행되는 함수
  passport.deserializeUser((user, done) => {
    console.log("DESC", user);
    done(null, user);
  });

  // Login을 실제로 수행하는 함수
  passport.use(
    new LocalStorage(
      {
        usernameField: "userId",
        passwordField: "password",
        session: true, // SESSION 저장하기
      },
      (userId, password, done) => {
        // Members.js에 선언된 사용자 리스트를 사용하여 인증하기
        // filter를 쓸 때는 반드시 배열의 0번째 값을 return 해주어야 한다.
        /*
        const findMember = members.filter((member) => {
          return member.userId === userId && member.password === password;
        });
        if (findMember && findMember.length > 0) {
          return done(null, findMember[0]);
        } else {
          return done(null, false, { message: "Login FAIL!" });
        }
		*/
        members.map((member) => {
          if (member.userId === userId && member.password === password) {
            return done(null, member);
          }
        });

        members.forEach((member) => {
          if (member.userId === userId && member.password === password) {
            return done(null, member);
          }
        });
        return done(null, false, { message: "Login FAIL!" });
      }
    )
  );
};

export default exportPassport;
